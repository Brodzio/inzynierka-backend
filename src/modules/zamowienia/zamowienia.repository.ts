import { PozycjeZamowienia } from './../pozycje-zamowienia/pozycje-zamowienia.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Zamowienia } from './zamowienia.entity';
import { CreateZamowieniDTO } from './dto/create-zamowienia.dto';

@EntityRepository(Zamowienia)
export class ZamowieniaRepository extends Repository<Zamowienia> {
    
    async createZamowienia(
        user: any,
        pozycjeZamowienia: PozycjeZamowienia[],
        createZamowieniaDTO: CreateZamowieniDTO
    ): Promise<Zamowienia> {

        const zamowienie = new Zamowienia();
        zamowienie.data_zlozenia = new Date();
        zamowienie.data_przyjecia = null;
        zamowienie.data_wysylki = null;
        zamowienie.data_realizacji = null;
        zamowienie.rodzaj_dokumentu = createZamowieniaDTO.rodzaj_dokumentu;
        zamowienie.adresy = user.adresy.id;
        zamowienie.klienci = user.id;
        zamowienie.pozycje_zamowienia = pozycjeZamowienia;
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