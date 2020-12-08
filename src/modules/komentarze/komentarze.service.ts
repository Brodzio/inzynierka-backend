import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateKomentarzeDTO } from "./dto/create-komentarze.dto";
import { Komentarze } from "./komentarze.entity";
import { KomentarzeRepository } from "./komentarze.repository";

@Injectable()
export class KomentarzeServie {
    constructor(
        @InjectRepository(KomentarzeRepository)
        private komentarzeRepository: KomentarzeRepository,
    ) {}

    async createKomentarze(createKomentarzeDTO: CreateKomentarzeDTO): Promise<Komentarze> {
        return this.komentarzeRepository.createKomentarze(createKomentarzeDTO);
    }
}