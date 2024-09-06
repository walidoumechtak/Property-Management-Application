import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TenantService } from './tenant.service';
import { Tenant } from './tenant.modal';
import { CreateTenantDto } from './dto/createTenant.dto';

@Resolver()
export class TenantResolver {
    constructor(
        private tenantService: TenantService,
    ) {}


    @Mutation(() => Tenant)
    async createTenant(
        @Args('TenantDto') tenantDto: CreateTenantDto,
        @Args('propertyId') propertyId: number,
    ) {
        return await this.tenantService.createTenant(tenantDto, propertyId);
    }

    @Mutation(() => Tenant)
    async updateTenant(
        @Args('UpdateTenantDto') tenantDto: CreateTenantDto,
        @Args('tenantId') tenantId: number,
    ) {
        return await this.tenantService.updateTenant(tenantDto, tenantId);
    }

    @Query(() => [Tenant])
    async getTenants(
        @Args('propertyId') propertyId: number,
    ) {
        return await this.tenantService.getTenants(propertyId);
    }

    @Mutation(() => Tenant)
    async deleteTenant(
        @Args('tenantId') tenantId: number,
    ) {
        return await this.tenantService.deleteTenant(tenantId);
    }

    @Query(() => Tenant)
    async getSingleTenant(
        @Args('tenantId') tenantId: number,
    ) {
        console.log("get single tenant id: --->", tenantId);
        return await this.tenantService.getSingleTenant(tenantId);
    }
}
