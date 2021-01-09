import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { ProduktyRepository } from "./produkty.repository";
import { CreateProduktyDto } from './dto/create-produkt.dto';
import { Produkty } from './produkty.entity';
import { UpdateProduktyDto } from "./dto/update-produkty.dto";

@Injectable()
export class ProduktyService {
    constructor(
        @InjectRepository(ProduktyRepository)
        private produktyRepository: ProduktyRepository,
    ) {}

    async createProdukt(
        createProduktyDto: CreateProduktyDto
    ): Promise<Produkty> {
        console.log(createProduktyDto);
        return this.produktyRepository.createProdukt(createProduktyDto);
    }

    async getProdukty(): Promise<Produkty[]> {
        return this.produktyRepository.find();
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
        updateProdukty: UpdateProduktyDto,
    ): Promise<Produkty> {
        const { cena_brutto, cena_netto, opis, ilosc } = updateProdukty;
        const produkty = await this.getProduktyById(id);
        produkty.cena_brutto = cena_brutto;
        produkty.cena_netto = cena_netto;
        produkty.opis = opis;
        produkty.ilosc = ilosc;

        await produkty.save();
        return produkty;
    }

    async deleteProdukty(id: number): Promise<void> {
        const result = await this.produktyRepository.delete({ id });

        if(result.affected === 0) {
            throw new NotFoundException(`Produkt with ID "${id}" not found`);
        }
    }
}