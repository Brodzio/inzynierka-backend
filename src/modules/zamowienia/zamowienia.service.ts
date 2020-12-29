import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ZamowieniaRepository } from "./zamowienia.repository";
import { CreateZamowieniDTO } from './dto/create-zamowienia.dto';
import { Zamowienia } from './zamowienia.entity';

@Injectable()
export class ZamowieniaService {
    constructor(
        @InjectRepository(ZamowieniaRepository)
        private zamowieniaRepository: ZamowieniaRepository,
    ) {}

    async createZamowienia(
        createZamowieniaDTO: CreateZamowieniDTO,
        user
    ): Promise<Zamowienia> {
        return this.zamowieniaRepository.createZamowienia(createZamowieniaDTO, user);
    }

    async getZamowienia(): Promise<Zamowienia[]> {
        return this.zamowieniaRepository.getZamowienia();
    }

    async getZamowieniaById(id: number): Promise<Zamowienia> {
        const found = await this.zamowieniaRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Order with ID "${id}" not found`);
        }

        return found;
    }

    async updateZamowienia(
        id: number,
        createZamowieniaDTO: CreateZamowieniDTO
    ): Promise<Zamowienia> {
        const { data_zlozenia, data_przyjecia, data_wysylki, data_realizacji } = createZamowieniaDTO;
        const zamowienie = await this.getZamowieniaById(id);
        zamowienie.data_zlozenia = data_zlozenia;
        zamowienie.data_przyjecia = data_przyjecia;
        zamowienie.data_wysylki = data_wysylki;
        zamowienie.data_realizacji = data_realizacji;
        await zamowienie.save();
        return zamowienie;
    }

    async deleteZamowienia(
        id: number,
    ): Promise<void> {
        const result = await this.zamowieniaRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Order with ID "${id}" not found`);
        }
    }
}