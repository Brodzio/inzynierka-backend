import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { ProduktyRepository } from "./produkty.repository";
import { CreateProduktyDto } from './dto/create-produkt.dto';
import { Produkty } from './produkty.entity';

@Injectable()
export class ProduktyService {
    constructor(
        @InjectRepository(ProduktyRepository)
        private produktyRepository: ProduktyRepository,
    ) {}

    async createProdukt(createProduktyDto: CreateProduktyDto): Promise<Produkty> {
        return this.produktyRepository.createProdukt(createProduktyDto);
    }

    async getProdukty(): Promise<Produkty[]> {
        return this.produktyRepository.getProdukty();
    }

    async getProduktyById(id: number): Promise<Produkty> {
        const found = await this.produktyRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Produkt with ID"${id}" not found`);
        }

        return found;
    }

    async updateProdukty(
        id: number,
        updateProdukty: CreateProduktyDto,
    ): Promise<Produkty> {
        const { nazwa_produktu, cena_brutto, cena_netto, opis, ilosc, kod_produktu } = updateProdukty;
        const produkty = await this.getProduktyById(id);
        produkty.nazwa_produktu = nazwa_produktu;
        produkty.cena_brutto = cena_brutto;
        produkty.cena_netto = cena_netto;
        produkty.opis = opis;
        produkty.ilosc = ilosc;
        produkty.kod_produktu = kod_produktu;

        await produkty.save();
        return produkty;
    }
}