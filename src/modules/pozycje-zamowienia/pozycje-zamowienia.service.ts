import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PozycjeZamowieniaRepository } from "./pozycje-zamowienia.repository";

@Injectable()
export class PozycjeZamowieniaService {
    constructor(
        @InjectRepository(PozycjeZamowieniaRepository)
        private pozycjeZamowieniaRepository: PozycjeZamowieniaRepository,
    ) {}
}