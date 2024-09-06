// auth.service.ts
import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { PrismaService } from '../prisma.service'; // Your Prisma service
  import { LoginDto } from './dto/login.dto';
  import { RegisterDto} from './dto/register.dto';
  import * as bcrypt from 'bcrypt';
  import { Response, Request } from 'express';
  import { User } from '@prisma/client';
  import { ConfigService } from '@nestjs/config';
  
  @Injectable()
  export class AuthService {
    constructor(
      private readonly jwtService: JwtService,
      private readonly prisma: PrismaService,
      private readonly configService: ConfigService,
    ) {}

    // Refresh token logic
    async refreshToken(req: Request, res: Response): Promise<string> {
      const refreshToken = req.cookies['refresh_token']; // Get refresh token from cookies
  
      if (!refreshToken) {
        throw new UnauthorizedException('Refresh token not found');
      }
  
      let payload;
      try {
        payload = this.jwtService.verify(refreshToken, { // Verify refresh token and get payload
          secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        });
      } catch (error) {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }
  
      const userExists = await this.prisma.user.findUnique({ // Check if user exists
        where: { id: payload.sub },
      });
  
      if (!userExists) {
        throw new BadRequestException('User no longer exists');
      }
  
      const expiresIn = 15000; // Set new expiration time
      const expiration = Math.floor(Date.now() / 1000) + expiresIn; // Calculate expiration time
      const accessToken = this.jwtService.sign( // sign [generate] new access token
        { ...payload, exp: expiration },
        {
          secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        },
      );
  
      res.cookie('access_token', accessToken, { httpOnly: true }); // Set new access token in cookies
  
      return accessToken;
    }

    // Issue tokens method to generate tokens and set them in cookies
    private async issueTokens(user: User, response: Response) {
      const payload = { username: user.fullName, sub: user.id }; // Create payload for tokens
  
      const accessToken = this.jwtService.sign( // Generate access token
        { ...payload },
        {
          secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
          expiresIn: '150sec',
        },
      );
  
      const refreshToken = this.jwtService.sign(payload, { // Generate refresh token
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: '7d',
      });
  
      response.cookie('access_token', accessToken, { httpOnly: true }); // Set access token in cookies
      response.cookie('refresh_token', refreshToken, { // Set refresh token in cookies
        httpOnly: true,
      });
  
      return { user };
    }

    // Validate user credentials
    async validateUser(loginDto: LoginDto): Promise<any> {
      const user = await this.prisma.user.findUnique({
        where: { email: loginDto.email },
      });
      if (user && (await bcrypt.compare(loginDto.password, user.password))) {
        return user;
      }
      return null;
    }
    
    // Register method to create a new user
    async register(registerDto: RegisterDto, response: Response) {
      console.log('registerDto!!!', registerDto);
      const existingUser = await this.prisma.user.findUnique({
        where: { email: registerDto.email },
      });
  
      if (existingUser) {
        throw new Error('Email already in use'); // Provide a proper error response
      }
  
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
  
      const user = await this.prisma.user.create({
        data: {
          fullName: registerDto.fullName,
          password: hashedPassword,
          email: registerDto.email,
          image: ''
        },
      });
      console.log('user!!!', user);
      return this.issueTokens(user, response); // Issue tokens on registration [access token and refresh token]
    }
    
    // Login method to validate user credentials
    async login(loginDto: LoginDto, response: Response) {
      const user = await this.validateUser(loginDto);
  
      if (!user) {
        // throw new UnauthorizedException('Invalid credentials');
        throw new Error('Invalid credentials'); // Provide a proper error response
      }
  
      return this.issueTokens(user, response); // Issue tokens on login
    }
    
    // Logout method to clear cookies
    async logout(response: Response) {
      response.clearCookie('access_token');
      response.clearCookie('refresh_token');
      return 'Successfully logged out';
    }
  }