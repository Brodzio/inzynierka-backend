import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateZamowieniDTO } from './dto/create-zamowienia.dto';
import { Zamowienia } from './zamowienia.entity';

@EntityRepository(Zamowienia)
export class ZamowieniaRepository extends Repository<Zamowienia> {
    
    async createZamowienia(
        createZamowieniaDTO: CreateZamowieniDTO,
        user
    ): Promise<Zamowienia> {
        const{ data_zlozenia, data_przyjecia, data_wysylki, data_realizacji, adresy } = createZamowieniaDTO;

        const zamowienie = new Zamowienia();
        zamowienie.data_zlozenia = data_zlozenia;
        zamowienie.data_przyjecia = data_przyjecia;
        zamowienie.data_wysylki = data_wysylki;
        zamowienie.data_realizacji = data_realizacji;
        zamowienie.adresy = adresy;
        zamowienie.klienci = user.klientId;

        try {
            await zamowienie.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return zamowienie;
    }

    async getZamowienia(): Promise<Zamowienia[]> {
        const query = this.createQueryBuilder('zamowienia');

        const zamowienie = await query.getMany();

        return zamowienie;
    }
}