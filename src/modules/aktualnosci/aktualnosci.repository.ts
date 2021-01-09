import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Aktualnosci } from './aktualnosci.entity';
import { CreateAktualnosciDTO } from "./dto/create-aktualnosci.dto";

@EntityRepository(Aktualnosci)
export class AktualnosciRepository extends Repository<Aktualnosci> {

    async createAktualnosci(createAktualnosciDTO: CreateAktualnosciDTO): Promise<Aktualnosci> {
        const{ data_opublikowania, tytul, opis, zdjecie } = createAktualnosciDTO;

        const aktualnosc = new Aktualnosci();
        aktualnosc.data_opublikowania = data_opublikowania;
        aktualnosc.tytul = tytul;
        aktualnosc.opis = opis;
        aktualnosc.zdjecie = zdjecie;

        try {
            await aktualnosc.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return aktualnosc;
    }
}