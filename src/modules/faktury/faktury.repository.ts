import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Faktury } from './faktury.entity';
import { Zamowienia } from '../zamowienia/zamowienia.entity';
import * as uuid from 'uuid';
import { PozycjeFaktury } from '../pozycje-faktury/pozycje-faktury.entity';
import { DaneSklepu } from '../dane-sklepu/dane-sklepu.entity';

@EntityRepository(Faktury)
export class FakturyRepository extends Repository<Faktury> {

    async createFaktury(
        zamowienia: Zamowienia,
        pozycjeFaktury: PozycjeFaktury[],
        suma_netto: number,
        suma_brutto: number,
        daneSklepu: DaneSklepu
    ): Promise<Faktury> {

        const faktura = new Faktury();
        faktura.nr_faktury = uuid.v4();
        faktura.data_sprzedazy = new Date();
        faktura.wartosc_netto = suma_netto;
        faktura.wartosc_brutto = suma_brutto;
        faktura.rodzaj_dokumentu = zamowienia.rodzaj_dokumentu;
        faktura.adresy = zamowienia.adresy;
        faktura.dane_sklepu = daneSklepu;
        faktura.klienci = zamowienia.klienci;
        faktura.pozycje_faktury = pozycjeFaktury;
        
        try {
            await faktura.save();
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException();
        }
        return faktura;
    }

    async getFaktury(): Promise<Faktury[]> {
        const query = this.createQueryBuilder('faktury');

        const faktura = await query.getMany();

        return faktura;
    }
}