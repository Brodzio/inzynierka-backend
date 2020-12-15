import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePlatnosciDTO } from './dto/create-platnosci.dto';
import { Platnosci } from './platnosci.entity';

@EntityRepository(Platnosci)
export class PlatnosciRepository extends Repository<Platnosci> {
    
    async createPlatnosci(createPlatnosciDTO: CreatePlatnosciDTO): Promise<Platnosci> {
        const{ data_platnosci } = createPlatnosciDTO;

        const platnosc = new Platnosci();
        platnosc.data_platnosci = data_platnosci;

        try {
            await platnosc.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return platnosc;
    }

    async getPlatnosci(): Promise<Platnosci[]> {
        const query = this.createQueryBuilder('platnosci');

        const platnosc = await query.getMany();

        return platnosc;
    }
}