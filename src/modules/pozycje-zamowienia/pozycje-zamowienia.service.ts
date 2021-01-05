import { PozycjeZamowienia } from './pozycje-zamowienia.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PozycjeZamowieniaRepository } from "./pozycje-zamowienia.repository";

@Injectable()
export class PozycjeZamowieniaService {
    constructor(
        @InjectRepository(PozycjeZamowieniaRepository)
        private pozycjeZamowieniaRepository: PozycjeZamowieniaRepository,
    ) {}

    async getZamowienia(id: number): Promise<PozycjeZamowienia[]>{
        const pozycje: PozycjeZamowienia[] = await this.pozycjeZamowieniaRepository.find({ where: { zamowienia: id }});
        return pozycje;
    }
}