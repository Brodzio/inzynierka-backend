import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateZdjeciaProduktowDTO } from "./dto/create-zdjecia-produktow.dto";
import { ZdjeciaProduktowRepository } from "./zdjecia-produktow.repository";
import { ZdjeciaProduktow } from './zdjecia-produktow.entity';

@Injectable()
export class ZdjeciaProduktowService {
    constructor(
        @InjectRepository(ZdjeciaProduktowRepository)
        private zdjeciaProduktowRepository: ZdjeciaProduktowRepository,
    ) {}

    async createZdjeciaProduktow(createZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO): Promise<ZdjeciaProduktow> {
        return this.zdjeciaProduktowRepository.createZdjeciaProduktow(createZdjeciaProduktowDTO);
    }

    async getZdjeciaProduktow(): Promise<ZdjeciaProduktow[]> {
        return this.zdjeciaProduktowRepository.find();
    }

    async getZdjeciaProduktowById(id: number): Promise<ZdjeciaProduktow> {
        const found = await this.zdjeciaProduktowRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Photo with ID "${id}" not found`);
        }

        return found;
    }

    async updateZdjeciaProduktow(
        id: number,
        createZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO,
    ): Promise<ZdjeciaProduktow> {
        const { nazwa, data_dodania } = createZdjeciaProduktowDTO;
        const photo = await this.getZdjeciaProduktowById(id);
        photo.nazwa = nazwa;
        photo.data_dodania = data_dodania;
        await photo.save();
        return photo;
    }

    async deleteZdjeciaProduktow(
        id: number,
    ): Promise<void> {
        const result = await this.zdjeciaProduktowRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Photo with ID "${id}" not found`);
        }
    }
}