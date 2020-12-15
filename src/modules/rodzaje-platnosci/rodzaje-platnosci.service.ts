import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RodzajePlatnosciRepository } from "./rodzaje-platnosci.repository";
import { RodzajePlatnosci } from './rodzaje-platnosci.entity';
import { CreateRodzajePlatnosciDTO } from './dto/create-rodzaje-platnosci.dto';

@Injectable()
export class RodzajePlatnosciService {
    constructor(
        @InjectRepository(RodzajePlatnosciRepository)
        private rodzajePlatnosciRepository: RodzajePlatnosciRepository,
    ) {}

    async createRodzajePlatnosci(createRodzajePlatnosciDTO: CreateRodzajePlatnosciDTO): Promise<RodzajePlatnosci> {
        return this.rodzajePlatnosciRepository.createRodzajePlatnosci(createRodzajePlatnosciDTO);
    }

    async getRodzajePlatnosci(): Promise<RodzajePlatnosci[]> {
        return this.rodzajePlatnosciRepository.getRodzajePlatnosci();
    }

    async getRodzajePlatnosciById(id: number): Promise<RodzajePlatnosci> {
        const found = await this.rodzajePlatnosciRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Kind of payment with ID "${id}" not found`);
        }

        return found;
    }

    async updateRodzajePlatnosci(
        id: number,
        createRodzajePlatnosciDTO: CreateRodzajePlatnosciDTO,
    ): Promise<RodzajePlatnosci> {
        const { nazwa_platnosci } = createRodzajePlatnosciDTO;
        const payment = await this.getRodzajePlatnosciById(id);
        payment.nazwa_platnosci = nazwa_platnosci;
        await payment.save();
        return payment;
    }

    async deleteRodzajePlatnosci(
        id: number,
    ): Promise<void> {
        const result = await this.rodzajePlatnosciRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Kind of payment with ID "${id}" not found`);
        }
    }
}