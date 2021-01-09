import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { KategorieRepository } from "./kategorie.repository";
import { Kategorie } from './kategorie.entity';
import { CreateKategorieDTO } from "./dto/create-kategorie.dto";

@Injectable()
export class KategorieService {
    constructor(
        @InjectRepository(KategorieRepository)
        private kategorieRepository: KategorieRepository
    ) {}

    async createKategorie(createKategorieDTO: CreateKategorieDTO): Promise<Kategorie> {
        return this.kategorieRepository.createKategorie(createKategorieDTO);
    }

    async getKategorie(): Promise<Kategorie[]> {
        return this.kategorieRepository.find();
    }

    async getKategorieById(id: number): Promise<Kategorie> {
        const found = await this.kategorieRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Category with ID "${id}" not found`);
        }

        return found;
    }

    async updateKategorie(
        id: number,
        createKategorieDTO: CreateKategorieDTO,
    ): Promise<Kategorie> {
        const { nazwa_kategorii } = createKategorieDTO;
        const kategoria = await this.getKategorieById(id);
        kategoria.nazwa_kategorii = nazwa_kategorii
        await kategoria.save();
        return kategoria;
    }

    async deleteKategorie(
        id: number,
    ): Promise<void> {
        const result = await this.kategorieRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Category with ID "${id}" not found`);
        }
    }
}