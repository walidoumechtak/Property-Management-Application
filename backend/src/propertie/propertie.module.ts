import { Module } from '@nestjs/common';
import { PropertieService } from './propertie.service';
import { PropertieResolver } from './propertie.resolver';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [PropertieService, PropertieResolver, PrismaService, UserService],
})
export class PropertieModule {}
