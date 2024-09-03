import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaymentService {

  constructor(
    private prisma: PrismaService,
  ) {}

  create(createPaymentInput: CreatePaymentDto, tenantId: number) {
    const tenant = this.prisma.tenant.findUnique({
      where: {
        id: tenantId
      }
    });

    if (!tenant) {
      throw new Error('Tenant not found');
    }

    return this.prisma.payment.create({
      data: {
        ...createPaymentInput,
        tenant: {
          connect: {
            id: tenantId
          }
        }
      }
    });
  }

  async getPayments(tenantId: number) {
    return this.prisma.payment.findMany({
      where: {
        tenantId: tenantId
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
