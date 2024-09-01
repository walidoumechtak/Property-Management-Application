import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Tenant {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    contact: string;

    @Field()
    section: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}