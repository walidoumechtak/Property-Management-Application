import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Propertie } from './propertie.modal';
import { CreatePropertieDto } from './dto/createPropertie.dto';
import { PropertieService } from './propertie.service';

@Resolver()
export class PropertieResolver {
    constructor(
        private propertieService: PropertieService,
    ) {}

    @Mutation(() => Propertie)
    async createPropertie(
        @Args('propertieDto') propertieDto: CreatePropertieDto,
        @Args('userId') userId: number,
    ) {
        return this.propertieService.createPropertie(propertieDto, userId);
    }


    @Query(() => [Propertie])
    async getProperties(
        @Args('userId') userId: number,
    ) : Promise<Propertie[]>{
        return await this.propertieService.getProperties(userId);
    }

    @Query(() => Propertie)
    async getPropertie(
        @Args('id') id: number,
    ) {
        return await this.propertieService.getPropertie(id);
    }
}
