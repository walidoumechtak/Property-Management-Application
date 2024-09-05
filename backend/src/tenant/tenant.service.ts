import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTenantDto } from './dto/createTenant.dto';
import { UpdateTenantDto } from './dto/updateTenant.dto';

@Injectable()
export class TenantService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async createTenant(createTenantDto: CreateTenantDto, propertyId: number) {
        const {...tenantData } = createTenantDto;
        console.log("Tenant Data: --->", tenantData);
        const createdTenant = await this.prisma.tenant.create({
            data: {
                ...tenantData,
                property: {
                    connect: {
                        id: propertyId,
                    },
                },
            },
        });
        console.log("Created Tenant: --->", createdTenant);
        return createdTenant;
    }

    async updateTenant(updateTenantDto: UpdateTenantDto, tenantId: number) {
        const {...tenantData } = updateTenantDto;
        console.log("Tenant Data: --->", tenantData);
        const updatedTenant = await this.prisma.tenant.update({
            where: {
                id: tenantId,
            },
            data: {
                ...tenantData,
            },
        });
        console.log("Updated Tenant: --->", updatedTenant);
        return updatedTenant;
    }

    async getTenants(propertyId: number) {
        const tenants = await this.prisma.tenant.findMany({
            where: {
                propertyId: propertyId,
            },
        });
        console.log("Tenants: --->", tenants);
        return tenants;
    }

    async deleteTenant(tenantId: number) {
        console.log("----- Tenant ID: --->", tenantId);
        const deletedTenant = await this.prisma.tenant.delete({
            where: {
                id: tenantId,
            },
        });
        console.log("Deleted Tenant: --->", deletedTenant);
        return deletedTenant;
    }
}
