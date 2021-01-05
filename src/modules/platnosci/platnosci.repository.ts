import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { PozycjePlatnosci } from '../pozycje-platnosci/pozycje-platnosci.entity';
import { Platnosci } from './platnosci.entity';
import { RodzajePlatnosci } from '../rodzaje-platnosci/rodzaje-platnosci.entity';

@EntityRepository(Platnosci)
export class PlatnosciRepository extends Repository<Platnosci> {
    
    async createPlatnosci(
        rodzajePlatnosci: RodzajePlatnosci,
        pozycjePlatnosci: PozycjePlatnosci[]
    ): Promise<Platnosci> {

        const platnosc = new Platnosci();
        platnosc.data_platnosci = new Date();
        platnosc.pozycje_platnosci = pozycjePlatnosci;
        platnosc.rodzaje_platnosci = rodzajePlatnosci;

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