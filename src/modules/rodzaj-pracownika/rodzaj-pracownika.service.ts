import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RodzajPracownikaRepository } from "./rodzaj-pracownika.repository";

@Injectable()
export class RodzajPracownikaService {
    constructor(
        @InjectRepository(RodzajPracownikaRepository)
        private rodzajPracownikaRepository: RodzajPracownikaRepository,
    ) {}
}