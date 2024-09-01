import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { CreatePropertieDto } from './dto/createPropertie.dto';

@Injectable()
export class PropertieService {
    constructor(
        private prisma: PrismaService,
        private userService: UserService,
    ) {}

    async createPropertie(createPropertieDto: CreatePropertieDto, userId: number) {
        const {...propertieData } = createPropertieDto;

        // Retrieve the user associated with the property
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        // Create the property record in the database
        const createdPropertie = await this.prisma.property.create({
            data: {
                ...propertieData,
                user: {
                    connect: {
                        id: user.id,
                    },
                },
            },
        });
        console.log("Created Propertie: --->", createdPropertie);
        return createdPropertie;
    }


    //  get properties from database =========================
    async getProperties(userId: number) {
        console.log("User ID: --->", userId);
        const data = this.prisma.property.findMany({
            where: {
                userId,
            }
        })
        return data;
    }

    async getPropertiesByname(name: string) {
        const data = this.prisma.property.findMany({
            where: {
                name: {
                    contains: name,
                },
            },
        });
        return data;
    }

    async getPropertie(id: number) {
        const propertie = this.prisma.property.findUnique({
            where: {
                id,
            },
        });
        return propertie;
    }
}
