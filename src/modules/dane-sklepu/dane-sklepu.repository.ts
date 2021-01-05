import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { DaneSklepu } from './dane-sklepu.entity';
import { CreateDaneSklepuDTO } from './dto/create-dane-sklepu.dto';

@EntityRepository(DaneSklepu)
export class DaneSklepuRepository extends Repository<DaneSklepu> {
    
    async createDaneSklepu(createDaneSklepuDTO: CreateDaneSklepuDTO): Promise<DaneSklepu> {
        const{ nazwa, email, nip, nr_tel, adresy } = createDaneSklepuDTO;

        const company_data = new DaneSklepu();
        company_data.nazwa = nazwa;
        company_data.email = email;
        if (nip) {
            company_data.nip = nip;
        } else {
            company_data.nip = "null"
        }
        company_data.nr_tel = nr_tel;
        company_data.adresy = adresy;

        try {
            await company_data.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return company_data;
    }

    async getDaneSklepu(): Promise<DaneSklepu> {
        const company_data = await this.findOne();

        return company_data;
    }
}