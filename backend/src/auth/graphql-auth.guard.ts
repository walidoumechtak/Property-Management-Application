import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Response } from 'express';
  import { ConfigService } from '@nestjs/config';
  import { Request } from 'express';
  @Injectable()
  export class GraphqlAuthGuard implements CanActivate {
    constructor(
      private jwtService: JwtService,
      private configService: ConfigService,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const gqlCtx = context.getArgByIndex(2); // Get the GraphQL context
      const request: Request = gqlCtx.req; // Get the request object from the context
  
      const token = this.extractTokenFromCookie(request); // Extract token from cookie
      if (!token) {
        throw new UnauthorizedException();
      }
  
      try {
        const payload = await this.jwtService.verifyAsync(token, { // Verify token and get payload
          secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        });
        console.log('PAYLOAD!', payload);
        request['user'] = payload; // Attach the user object to the request object
      } catch (error) {
        console.log(error);
        // If token is expired, we could also check if there's a refresh token
        // and then refresh the access token here
  
        // If there's no refresh token, we throw an UnauthorizedException
        // and the user has to log in again
  
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromCookie(request: Request): string | undefined {
      return request.cookies?.access_token;
    }
  }