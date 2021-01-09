import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProducenciRepository } from "./producenci.repository";
import { CreateProducenciDTO } from './dto/create-producenci.dto';
import { Producenci } from './producenci.entity';

@Injectable()
export class ProducenciService {
    constructor(
        @InjectRepository(ProducenciRepository)
        private producenciRepository: ProducenciRepository,
    ) {}

    async createProducenci(createProducenciDTO: CreateProducenciDTO): Promise<Producenci> {
        return this.producenciRepository.createProducenci(createProducenciDTO);
    }

    async getProducenci(): Promise<Producenci[]> {
        return this.producenciRepository.find();
    }

    async getProducenciById(id: number): Promise<Producenci> {
        const found = await this.producenciRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Producer with ID "${id}" not found`);
        }

        return found;
    }

    async updateProducenci(
        id: number,
        createProducenciDTO: CreateProducenciDTO,
    ): Promise<Producenci> {
        const { nazwa_producenta } = createProducenciDTO;
        const producer = await this.getProducenciById(id);
        producer.nazwa_producenta = nazwa_producenta;
        await producer.save();
        return producer;
    }

    async deleteProducenci(
        id: number,
    ): Promise<void> {
        const result = await this.producenciRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Producer with ID "${id}" not found`);
        }
    }
}