import { Args, Mutation, Resolver } from '@nestjs/graphql';
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
}
