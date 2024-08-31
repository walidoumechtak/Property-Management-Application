import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Propertie {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    address: string;
    
    @Field()
    type: string;
    
    @Field()
    numberOfUnits: number;
    
    @Field()
    rentalCost: number;
    
    @Field()
    createdAt: Date;
    
    @Field()
    updatedAt: Date;
}