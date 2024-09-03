import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => Payment)
  async createPayment(
    @Args('createPaymentDto') createPaymentInput: CreatePaymentDto,
    @Args('tenantId') tenantId: number,
  ) {
    console.log('createPaymentInput:', createPaymentInput);
    return await this.paymentService.create(createPaymentInput, tenantId);
  }

  @Query(() => [Payment])
  async getPayments(
    @Args('tenantId') tenantId: number,
  ) {
    return await this.paymentService.getPayments(tenantId);
  }

  @Query(() => Payment, { name: 'payment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentService.findOne(id);
  }

  @Mutation(() => Payment)
  removePayment(@Args('id', { type: () => Int }) id: number) {
    return this.paymentService.remove(id);
  }
}
