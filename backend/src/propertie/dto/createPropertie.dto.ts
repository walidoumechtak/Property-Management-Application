import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsString, IsDate, IsNotEmpty } from "class-validator";

@InputType()
export class CreatePropertieDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    address: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    type: string;

    @Field()
    @IsNumber()
    @IsNotEmpty()
    numberOfUnits: number;

    @Field()
    @IsNumber()
    @IsNotEmpty()
    rentalCost: number;
}
