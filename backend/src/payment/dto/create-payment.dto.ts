import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePaymentDto {
  
  @Field()
  @IsNotEmpty()
  datePaid: Date;

  @Field()
  @IsNotEmpty()
  isSettled: boolean;

  @Field()
  @IsNotEmpty()
  amount: number;
}
