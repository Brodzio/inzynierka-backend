import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePlatnosciDTO } from "./dto/create-platnosci.dto";
import { PlatnosciRepository } from "./platnosci.repository";
import { Platnosci } from './platnosci.entity';

@Injectable()
export class PlatnosciService {
    constructor(
        @InjectRepository(PlatnosciRepository)
        private platnosciRepository: PlatnosciRepository,
    ) {}

    async createPlatnosci(createPlatnosciDTO: CreatePlatnosciDTO): Promise<Platnosci> {
        return this.platnosciRepository.createPlatnosci(createPlatnosciDTO);
    }

    async getPlatnosci(): Promise<Platnosci[]> {
        return this.platnosciRepository.getPlatnosci();
    }

    async getPlatnosciById(id: number): Promise<Platnosci> {
        const found = await this.platnosciRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Payment with ID "${id}" not found`);
        }

        return found;
    }

    async updatePlatnosci(
        id: number,
        createPlatnosciDTO: CreatePlatnosciDTO,
    ): Promise<Platnosci> {
        const { data_platnosci } = createPlatnosciDTO;
        const platnosc = await this.getPlatnosciById(id);
        platnosc.data_platnosci = data_platnosci;
        await platnosc.save();
        return platnosc;
    }

    async deletePlatnosci(
        id: number,
    ): Promise<void> {
        const result = await this.platnosciRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Payment with ID "${id}" not found`);
        }
    }
}