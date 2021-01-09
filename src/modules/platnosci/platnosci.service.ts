import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePlatnosciDTO } from "./dto/create-platnosci.dto";
import { PlatnosciRepository } from "./platnosci.repository";
import { Platnosci } from './platnosci.entity';
import { PozycjePlatnosci } from '../pozycje-platnosci/pozycje-platnosci.entity';
import { Faktury } from '../faktury/faktury.entity';
import { RodzajePlatnosciService } from '../rodzaje-platnosci/rodzaje-platnosci.service';
import { RodzajePlatnosci } from '../rodzaje-platnosci/rodzaje-platnosci.entity';

@Injectable()
export class PlatnosciService {
    constructor(
        @InjectRepository(PlatnosciRepository)
        private platnosciRepository: PlatnosciRepository,
        private rodzajePlatnosciService: RodzajePlatnosciService
    ) {}

    async createPlatnosci(
        createPlatnosciDTO: CreatePlatnosciDTO,
        faktura: Faktury
    ): Promise<Platnosci> {
        let pozycjePlatnosci: PozycjePlatnosci[] = new Array<PozycjePlatnosci>();
        let rodzajePlatnosci: RodzajePlatnosci = await this.rodzajePlatnosciService.createRodzajePlatnosci(createPlatnosciDTO);
        for( let i = 0; i<faktura.pozycje_faktury.length; i++) {
            let pozycjaPlatnosci: PozycjePlatnosci = {} as PozycjePlatnosci;
            pozycjaPlatnosci.faktury = faktura;
            pozycjePlatnosci.push(pozycjaPlatnosci);
        }
        return this.platnosciRepository.createPlatnosci(rodzajePlatnosci, pozycjePlatnosci);
    }

    async getPlatnosci(): Promise<Platnosci[]> {
        return this.platnosciRepository.find();
    }

    async getPlatnosciById(id: number): Promise<Platnosci> {
        const found = await this.platnosciRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Payment with ID "${id}" not found`);
        }

        return found;
    }

    async updatePlatnosci(
        id: number,
        createPlatnosciDTO: CreatePlatnosciDTO,
    ): Promise<Platnosci> {
        //const { data_platnosci } = createPlatnosciDTO;
        const platnosc = await this.getPlatnosciById(id);
        //platnosc.data_platnosci = data_platnosci;
        await platnosc.save();
        return platnosc;
    }

    async deletePlatnosci(
        id: number,
    ): Promise<void> {
        const result = await this.platnosciRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Payment with ID "${id}" not found`);
        }
    }
}