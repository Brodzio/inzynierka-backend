import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProducenciDTO } from './dto/create-producenci.dto';
import { Producenci } from './producenci.entity';

@EntityRepository(Producenci)
export class ProducenciRepository extends Repository<Producenci> {

    async createProducenci(createProducenciDTO: CreateProducenciDTO): Promise<Producenci> {
        const { nazwa_producenta } = createProducenciDTO;

        const producer = new Producenci();
        producer.nazwa_producenta = nazwa_producenta;

        try {
            await producer.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return producer;
    }
}