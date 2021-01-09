import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdresyRepository } from "./adresy.repository";
import { Adresy } from './adresy.entity';
import { CreateAdresyDto } from './dto/create-adresy.dto';

@Injectable()
export class AdresyService {
    constructor(
        @InjectRepository(AdresyRepository)
        private adresyRepository: AdresyRepository,
    ) {}

    async createAdresy(createAdresyDTO: CreateAdresyDto): Promise<Adresy> {
        return this.adresyRepository.createAdresy(createAdresyDTO);
    }

    async getAdresy(): Promise<Adresy[]> {
        return this.adresyRepository.find();
    }

    async getAdresyById(id: number): Promise<Adresy> {
        const found = await this.adresyRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Adress with ID "${id}" not found`);
        }

        return found;
    }

    async updateAdresy(
        id: number,
        updateAdresy: CreateAdresyDto,
    ): Promise<Adresy> {
        const { wojewodztwo, miejscowosc, ulica, nr_budynku, nr_lokalu, kod_pocztowy } = updateAdresy;
        const adress = await this.getAdresyById(id);
        adress.wojewodztwo = wojewodztwo;
        adress.miejscowosc = miejscowosc;
        adress.ulica = ulica;
        adress.nr_budynku = nr_budynku;
        if (nr_lokalu && nr_lokalu != "null") {
            adress.nr_lokalu = nr_lokalu;
        } else {
            adress.nr_lokalu = "null";
        }
        adress.kod_pocztowy = kod_pocztowy;
        await adress.save();
        return adress;
    }

    async deleteAdresy(
        id: number,
    ): Promise<void> {
        const result = await this.adresyRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Adress with ID "${id}" not found`);
        }
    }
}