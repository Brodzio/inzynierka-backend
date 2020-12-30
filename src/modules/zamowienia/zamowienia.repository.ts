import { ProduktyService } from './../produkty/produkty.service';
import { PozycjeZamowieniaService } from './../pozycje-zamowienia/pozycje-zamowienia.service';
import { PozycjeZamowienia } from './../pozycje-zamowienia/pozycje-zamowienia.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateZamowieniDTO } from './dto/create-zamowienia.dto';
import { Zamowienia } from './zamowienia.entity';
import { Produkty } from '../produkty/produkty.entity';

@EntityRepository(Zamowienia)
export class ZamowieniaRepository extends Repository<Zamowienia> {
    
    async createZamowienia( createZamowieniaDTO: CreateZamowieniDTO, user: any, pozycjeZamowienia: PozycjeZamowienia[]): Promise<Zamowienia> {

        const zamowienie = new Zamowienia();
        zamowienie.data_zlozenia = new Date().toDateString();
        zamowienie.data_przyjecia = null;
        zamowienie.data_wysylki = null;
        zamowienie.data_realizacji = null;
        zamowienie.adresy = user.adresy.id;
        zamowienie.klienci = user.id;
        zamowienie.pozycje_zamowienia = pozycjeZamowienia;
        try {
            await zamowienie.save();
        } catch (error) {
            throw(error);
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