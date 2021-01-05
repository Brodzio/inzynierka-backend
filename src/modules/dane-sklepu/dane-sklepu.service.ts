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
        const company_data = await this.getDaneSklepu();
        if(company_data) {
            return null;
        } else {
            return this.daneSklepuRepository.createDaneSklepu(createDaneSklepuDTO);
        }
    }

    async getDaneSklepu(): Promise<DaneSklepu> {
        return this.daneSklepuRepository.getDaneSklepu();
    }

    async updateDaneSklepu(
        id: number,
        createDaneSklepuDTO: CreateDaneSklepuDTO
    ): Promise<DaneSklepu> {
        const { nazwa, email, nip, nr_tel, adresy } = createDaneSklepuDTO;
        const company_data = await this.getDaneSklepu();
        company_data.nazwa = nazwa;
        company_data.email = email;
        company_data.nip = nip;
        company_data.nr_tel = nr_tel;
        company_data.adresy = adresy;
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