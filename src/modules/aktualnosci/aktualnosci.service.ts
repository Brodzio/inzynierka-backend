import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AktualnosciRepository } from "./aktualnosci.repository";
import { CreateAktualnosciDTO } from "./dto/create-aktualnosci.dto";
import { Aktualnosci } from './aktualnosci.entity';
import { UpdateAktualnosciDTO } from "./dto/update-aktualnosci.dto";

@Injectable()
export class AktualnosciService {
    constructor(
        @InjectRepository(AktualnosciRepository)
        private aktualnosciRepository: AktualnosciRepository,
    ) {}

    async createAktualnosci(
        createAktualnosciDTO: CreateAktualnosciDTO,
        user: any
    ): Promise<Aktualnosci> {
        return this.aktualnosciRepository.createAktualnosci(createAktualnosciDTO, user);
    }

    async getAktualnosci(): Promise<Aktualnosci[]> {
        return this.aktualnosciRepository.find();
    }

    async getAktualnosciById(id: number): Promise<Aktualnosci> {
        const found = await this.aktualnosciRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`News with ID "${id}" not found`);
        }

        return found;
    }

    async updateAktualnosci(
        id: number,
        updateAktualnosci: UpdateAktualnosciDTO,
    ): Promise<Aktualnosci> {
        const { tytul, opis, zdjecie } = updateAktualnosci;
        const aktualnosc = await this.getAktualnosciById(id);
        aktualnosc.tytul = tytul;
        aktualnosc.opis = opis;
        aktualnosc.zdjecie = zdjecie;
        await aktualnosc.save();
        return aktualnosc;
    }

    async deleteAktualnosci(
        id: number,
    ): Promise<void> {
        const result = await this.aktualnosciRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`News with ID "${id}" not found`);
        }
    }
}