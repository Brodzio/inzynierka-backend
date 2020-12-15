import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PozycjeFakturyRepository } from "./pozycje-faktury.repository";

@Injectable()
export class PozycjeFakturyService {
    constructor(
        @InjectRepository(PozycjeFakturyRepository)
        private pozycjeFakturyRepository: PozycjeFakturyRepository,
    ) {}
}