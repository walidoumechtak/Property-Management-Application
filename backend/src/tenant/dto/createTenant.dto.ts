import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty } from "class-validator";

@InputType()
export class CreateTenantDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    contact: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    section: string;
}
