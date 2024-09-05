import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async getUsers() {
        return this.prisma.user.findMany({
            // include: {
            //     posts: true,
            // },
        });
    }

    async userWithToals(userId: number) {
        const userWithTotals = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          properties: {
            select: {
              _count: {
                select: {
                  tenants: true,  // Count the tenants in each property
                }
              }
            }
          }
        }
      });
      
      const totalProperties = userWithTotals.properties.length;
      const totalTenants = userWithTotals.properties.reduce((acc, property) => acc + property._count.tenants, 0);
      
      const result = {
          totalProperties,
          totalTenants,
      };
      console.log("-------result: ", result);
      return result;
    }
}
