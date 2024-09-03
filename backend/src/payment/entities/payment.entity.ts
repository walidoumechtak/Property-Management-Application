import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Payment {
  @Field(() => Int)
  id: number
  
  @Field()
  datePaid: Date;

  @Field()
  isSettled: boolean;

  @Field()
  amount: number;
}
