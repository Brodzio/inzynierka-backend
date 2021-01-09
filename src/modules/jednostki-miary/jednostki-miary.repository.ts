import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateJednostkiMiaryDTO } from './dto/create-jednostki-miary.dto';
import { JednostkiMiary } from './jednostki-miary.entity';

@EntityRepository(JednostkiMiary)
export class JednostkiMiaryRepository extends Repository<JednostkiMiary> {
    
    async createJednostkiMiary(createJednostkiMiaryDTO: CreateJednostkiMiaryDTO): Promise<JednostkiMiary> {
        const { nazwa } = createJednostkiMiaryDTO;

        const measure = new JednostkiMiary();
        measure.nazwa = nazwa

        try {
            await measure.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return measure;
    }
}