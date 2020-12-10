import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateKomentarzeDTO } from "./dto/create-komentarze.dto";
import { Komentarze } from "./komentarze.entity";
import { KomentarzeRepository } from "./komentarze.repository";
import { UpdateKomentarzeDTO } from './dto/update-komentarze.dto';

@Injectable()
export class KomentarzeServie {
    constructor(
        @InjectRepository(KomentarzeRepository)
        private komentarzeRepository: KomentarzeRepository,
    ) {}

    async createKomentarze(createKomentarzeDTO: CreateKomentarzeDTO): Promise<Komentarze> {
        return this.komentarzeRepository.createKomentarze(createKomentarzeDTO);
    }

    async getKomentarze(): Promise<Komentarze[]> {
        return this.komentarzeRepository.getKomentarze();
    }

    async getCommentsById(id: number): Promise<Komentarze> {
        const found = await this.komentarzeRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Comment with ID "${id}" not found`);
        }

        return found;
    }

    async updateKomentarze(
        id: number,
        updateKomentarz: UpdateKomentarzeDTO,
    ): Promise<Komentarze> {
        const { data_modyfikacji, opis } = updateKomentarz;
        const komentarz = await this.getCommentsById(id);
        komentarz.data_modyfikacji = data_modyfikacji;
        komentarz.opis = opis;
        await komentarz.save();
        return komentarz;
    }

    async deleteKomentarze(
        id: number,
    ): Promise<void> {
        const result = await this.komentarzeRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Comment with ID "${id}" not found`);
        }
    }
}