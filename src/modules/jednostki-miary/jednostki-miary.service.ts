import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateJednostkiMiaryDTO } from "./dto/create-jednostki-miary.dto";
import { JednostkiMiaryRepository } from "./jednostki-miary.repository";
import { JednostkiMiary } from './jednostki-miary.entity';

@Injectable()
export class JednostkiMiaryService {
    constructor(
        @InjectRepository(JednostkiMiaryRepository)
        private jednostkiMiaryRepository: JednostkiMiaryRepository
    ) {}

    async createJednostkiMiary(createJednostkiMiaryDTO: CreateJednostkiMiaryDTO): Promise<JednostkiMiary> {
        return this.jednostkiMiaryRepository.createJednostkiMiary(createJednostkiMiaryDTO);
    }

    async getJednostkiMiary(): Promise<JednostkiMiary[]> {
        return this.jednostkiMiaryRepository.find();
    }

    async getJednostkiMiaryById(id: number): Promise<JednostkiMiary> {
        const found = await this.jednostkiMiaryRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Measure with ID "${id}" not found`);
        }

        return found;
    }

    async updateJednostkiMiary(
        id: number,
        createJednostkiMiaryDTO: CreateJednostkiMiaryDTO,
    ): Promise<JednostkiMiary> {
        const { nazwa } = createJednostkiMiaryDTO;
        const jednostka = await this.getJednostkiMiaryById(id);
        jednostka.nazwa = nazwa;
        await jednostka.save();
        return jednostka;
    }

    async deleteJednostkiMiary(
        id: number,
    ): Promise<void> {
        const result = await this.jednostkiMiaryRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Measure with ID "${id}" not found`);
        }
    }
}