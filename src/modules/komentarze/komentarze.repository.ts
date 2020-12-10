import { EntityRepository, Repository } from "typeorm";
import { Komentarze } from "./komentarze.entity";
import { CreateKomentarzeDTO } from './dto/create-komentarze.dto';
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Komentarze)
export class KomentarzeRepository extends Repository<Komentarze> {

    async createKomentarze(createKomentarzeDTO: CreateKomentarzeDTO): Promise<Komentarze> {
        const{ data_dodania, data_modyfikacji, opis } = createKomentarzeDTO;

        const komentarz = new Komentarze();
        komentarz.data_dodania = data_dodania;
        if(data_modyfikacji) {
            komentarz.data_modyfikacji = data_modyfikacji;
        } else {
            komentarz.data_modyfikacji = data_dodania;
        }
        komentarz.opis = opis;

        try {
            await komentarz.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return komentarz;
    }

    async getKomentarze(): Promise<Komentarze[]> {
        const query = this.createQueryBuilder('komentarze');

        const comments = await query.getMany();

        return comments;
    }
}