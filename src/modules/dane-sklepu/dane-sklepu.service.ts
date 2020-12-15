import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DaneSklepuRepository } from "./dane-sklepu.repository";
import { CreateDaneSklepuDTO } from "./dto/create-dane-sklepu.dto";
import { DaneSklepu } from './dane-sklepu.entity';

@Injectable()
export class DaneSklepuService {
    constructor(
        @InjectRepository(DaneSklepuRepository)
        private daneSklepuRepository: DaneSklepuRepository,
    ) {}

    async createDaneSklepu(createDaneSklepuDTO: CreateDaneSklepuDTO): Promise<DaneSklepu> {
        return this.daneSklepuRepository.createDaneSklepu(createDaneSklepuDTO);
    }

    async getDaneSklepu(): Promise<DaneSklepu[]> {
        return this.daneSklepuRepository.getDaneSklepu();
    }

    async getDaneSklepuById(id: number): Promise<DaneSklepu> {
        const found = await this.daneSklepuRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Company details with ID "${id}" not found`);
        }

        return found;
    }

    async updateDaneSklepu(
        id: number,
        createDaneSklepuDTO: CreateDaneSklepuDTO
    ): Promise<DaneSklepu> {
        const { nazwa, email, nip, nr_tel } = createDaneSklepuDTO;
        const company_data = await this.getDaneSklepuById(id);
        company_data.nazwa = nazwa;
        company_data.email = email;
        company_data.nip = nip;
        company_data.nr_tel = nr_tel;
        await company_data.save();
        return company_data;
    }

    async deleteDaneSklepu(
        id: number,
    ): Promise<void> {
        const result = await this.daneSklepuRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Company details with ID "${id}" not found`);
        }
    }
}