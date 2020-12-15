import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FakturyRepository } from "./faktury.repository";
import { Faktury } from './faktury.entity';
import { CreateFakturyDto } from "./dto/create-faktury.dto";

@Injectable()
export class FakturyService {
    constructor(
        @InjectRepository(FakturyRepository)
        private fakturyRepository: FakturyRepository,
    ) {}

    async createFaktury(createFakturyDto: CreateFakturyDto): Promise<Faktury> {
        return this.fakturyRepository.createFaktury(createFakturyDto);
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
        const { nr_faktury, data_sprzedazy, wartosc_netto, wartosc_brutto, wartosc_vat, rodzaj_dokumentu } = createFakturyDto;
        const faktura = await this.getFakturyById(id);
        faktura.nr_faktury = nr_faktury;
        faktura.data_sprzedazy = data_sprzedazy;
        faktura.wartosc_netto = wartosc_netto;
        faktura.wartosc_brutto = wartosc_brutto;
        faktura.wartosc_vat = wartosc_vat;
        faktura.rodzaj_dokumentu = rodzaj_dokumentu;
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