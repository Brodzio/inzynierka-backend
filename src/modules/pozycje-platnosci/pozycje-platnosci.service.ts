import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PozycjePlatnosciRepository } from "./pozycje-platnosci.repository";

@Injectable()
export class PozycjePlatnosciService {
    constructor(
        @InjectRepository(PozycjePlatnosciRepository)
        private pozycjePlatnosciRepository: PozycjePlatnosciRepository,
    ) {}
}