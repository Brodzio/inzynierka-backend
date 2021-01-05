import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FakturyRepository } from "./faktury.repository";
import { Faktury } from './faktury.entity';
import { CreateFakturyDto } from "./dto/create-faktury.dto";
import { Zamowienia } from '../zamowienia/zamowienia.entity';
import { PozycjeFaktury } from '../pozycje-faktury/pozycje-faktury.entity';
import { PozycjeZamowienia } from '../pozycje-zamowienia/pozycje-zamowienia.entity';
import { PozycjeZamowieniaService } from '../pozycje-zamowienia/pozycje-zamowienia.service';
import { DaneSklepuService } from '../dane-sklepu/dane-sklepu.service';

@Injectable()
export class FakturyService {
    constructor(
        @InjectRepository(FakturyRepository)
        private fakturyRepository: FakturyRepository,
        private pozycjeZamowieniaService: PozycjeZamowieniaService,
        private daneSklepuService: DaneSklepuService
    ) {}

    async createFaktury(
        createFakturyDto: CreateFakturyDto,
        zamowienia: Zamowienia
    ): Promise<Faktury> {
        let pozycjeFaktury: PozycjeFaktury[] = new Array<PozycjeFaktury>();
        let suma_netto: number = 0;
        let suma_brutto: number = 0;
        let daneSklepu = await this.daneSklepuService.getDaneSklepu();
        const pozycjeZamowienia: PozycjeZamowienia[] = await this.pozycjeZamowieniaService.getZamowienia(zamowienia.id);
        for( let i = 0; i<pozycjeZamowienia.length; i++) {
            let pozycjaFaktury: PozycjeFaktury = {} as PozycjeFaktury;
            suma_netto += (pozycjeZamowienia[i].ilosc) * Number.parseFloat(pozycjeZamowienia[i].cena_netto);
            suma_brutto += (pozycjeZamowienia[i].ilosc * Number.parseFloat(pozycjeZamowienia[i].cena_brutto));
            pozycjaFaktury.cena_netto_sprzedazy = pozycjeZamowienia[i].cena_netto;
            pozycjaFaktury.cena_brutto_sprzedazy = pozycjeZamowienia[i].cena_brutto;
            let stawkaVat: any = pozycjeZamowienia[i].produkt.stawka_vat;
            pozycjaFaktury.procent_vat_sprzedazy = stawkaVat.stawka_proc;
            pozycjaFaktury.pozycje_zamowienia = pozycjeZamowienia[i];
            pozycjaFaktury.data_sprzedazy = new Date();
            pozycjeFaktury.push(pozycjaFaktury);
        }
        return await this.fakturyRepository.createFaktury(zamowienia, pozycjeFaktury, suma_netto, suma_brutto, daneSklepu);
    }

    async getFaktury(): Promise<Faktury[]> {
        return this.fakturyRepository.getFaktury();
    }

    async getFakturyById(id: number): Promise<Faktury> {
        const found = await this.fakturyRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Invoice with ID "${id}" not found`);
        }

        return found;
    }

    async updateFaktury(
        id: number,
        createFakturyDto: CreateFakturyDto
    ): Promise<Faktury> {
        //const { nr_faktury, data_sprzedazy, wartosc_netto, wartosc_brutto, wartosc_vat, rodzaj_dokumentu } = createFakturyDto;
        const faktura = await this.getFakturyById(id);
        // faktura.nr_faktury = nr_faktury;
        // faktura.data_sprzedazy = data_sprzedazy;
        // faktura.wartosc_netto = wartosc_netto;
        // faktura.wartosc_brutto = wartosc_brutto;
        // faktura.wartosc_vat = wartosc_vat;
        // faktura.rodzaj_dokumentu = rodzaj_dokumentu;
        await faktura.save();
        return faktura;
    }

    async deleteFaktury(
        id: number,
    ): Promise<void> {
        const result = await this.fakturyRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Invoice with ID "${id}" not found`);
        }
    }
}