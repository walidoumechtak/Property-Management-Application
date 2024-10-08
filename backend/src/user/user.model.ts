import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserStatistics{
    @Field()
    totalProperties: number;

    @Field()
    totalTenants: number;
}

@ObjectType()
export class User{
    @Field()
    id?: number;

    @Field()
    fullName: string;

    @Field()
    email?: string;

    @Field({ nullable: true })
    bio?: string;

    @Field({ nullable: true })
    image: string;

    @Field()
    password: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}