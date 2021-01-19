import { EntityRepository, Repository } from "typeorm";
import { Komentarze } from "./komentarze.entity";
import { CreateKomentarzeDTO } from './dto/create-komentarze.dto';
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Komentarze)
export class KomentarzeRepository extends Repository<Komentarze> {

    async createKomentarze(
        createKomentarzeDTO: CreateKomentarzeDTO,
        user: any
    ): Promise<Komentarze> {
        const{ opis, produkty, aktualnosci } = createKomentarzeDTO;

        const komentarz = new Komentarze();
        komentarz.data_dodania = new Date();
        komentarz.opis = opis;
        komentarz.produkty = produkty;
        komentarz.aktualnosci = aktualnosci;
        komentarz.klienci = user.userId;

        try {
            await komentarz.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return komentarz;
    }
}