import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './tenant.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TenantService, TenantResolver, PrismaService, TenantService],
})
export class TenantModule {}
