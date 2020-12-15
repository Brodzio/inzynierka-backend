import { EntityRepository, Repository } from 'typeorm';
import { RodzajePlatnosci } from './rodzaje-platnosci.entity';
import { CreateRodzajePlatnosciDTO } from './dto/create-rodzaje-platnosci.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(RodzajePlatnosci)
export class RodzajePlatnosciRepository extends Repository<RodzajePlatnosci> {

    async createRodzajePlatnosci(createRodzajePlatnosciDTO: CreateRodzajePlatnosciDTO): Promise<RodzajePlatnosci> {
        const { nazwa_platnosci } = createRodzajePlatnosciDTO;

        const payment = new RodzajePlatnosci();
        payment.nazwa_platnosci = nazwa_platnosci;

        try {
            await payment.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return payment;
    }

    async getRodzajePlatnosci(): Promise<RodzajePlatnosci[]> {
        const query = this.createQueryBuilder('rodzaje_platnosci');

        const payment = await query.getMany();

        return payment;
    }
    
}