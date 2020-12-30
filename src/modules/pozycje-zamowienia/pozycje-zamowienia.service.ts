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

    getZamowienie(): Promise<PozycjeZamowienia>{
        return null; //proszę dokonczyc jak sie przyda
    }

    createPozycjeZamowienie(pozycjaZamowien: PozycjeZamowienia): Promise<PozycjeZamowienia>{
        //neiwazne
        return null;
    }
}