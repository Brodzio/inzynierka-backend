import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateZdjeciaProduktowDTO } from './dto/create-zdjecia-produktow.dto';
import { ZdjeciaProduktow } from './zdjecia-produktow.entity';

@EntityRepository(ZdjeciaProduktow)
export class ZdjeciaProduktowRepository extends Repository<ZdjeciaProduktow> {

    async createZdjeciaProduktow(createZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO): Promise<ZdjeciaProduktow> {
        const{ nazwa, data_dodania } = createZdjeciaProduktowDTO;

        const photo = new ZdjeciaProduktow();
        photo.nazwa = nazwa;
        photo.data_dodania = data_dodania;

        try {
            await photo.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return photo;
    }

    async getZdjeciaProduktow(): Promise<ZdjeciaProduktow[]> {
        const query = this.createQueryBuilder('zdjecia_produktow');

        const photo = await query.getMany();

        return photo;
    }
}