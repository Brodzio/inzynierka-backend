import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateFakturyDto } from './dto/create-faktury.dto';
import { Faktury } from './faktury.entity';

@EntityRepository(Faktury)
export class FakturyRepository extends Repository<Faktury> {

    async createFaktury(createFakturyDto: CreateFakturyDto): Promise<Faktury> {
        const{ nr_faktury, data_sprzedazy, wartosc_netto, wartosc_brutto, wartosc_vat, rodzaj_dokumentu, adresy, dane_sklepu, klienci } = createFakturyDto;

        const faktura = new Faktury();
        faktura.nr_faktury = nr_faktury;
        faktura.data_sprzedazy = data_sprzedazy;
        faktura.wartosc_netto = wartosc_netto;
        faktura.wartosc_brutto = wartosc_brutto;
        faktura.wartosc_vat = wartosc_vat;
        faktura.rodzaj_dokumentu = rodzaj_dokumentu;
        faktura.adresy = adresy;
        if(dane_sklepu) {
            faktura.dane_sklepu = dane_sklepu;
        }
        faktura.klienci = klienci;

        try {
            await faktura.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return faktura;
    }

    async getFaktury(): Promise<Faktury[]> {
        const query = this.createQueryBuilder('aktualnosci');

        const faktura = await query.getMany();

        return faktura;
    }
}