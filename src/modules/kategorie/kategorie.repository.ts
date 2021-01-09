import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateKategorieDTO } from "./dto/create-kategorie.dto";
import { Kategorie } from "./kategorie.entity";

@EntityRepository(Kategorie)
export class KategorieRepository extends Repository<Kategorie> {
    
    async createKategorie(createKategorieDTO: CreateKategorieDTO): Promise<Kategorie> {
        const { nazwa_kategorii } = createKategorieDTO;

        const kategoria = new Kategorie();
        kategoria.nazwa_kategorii = nazwa_kategorii;

        try {
            await kategoria.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return kategoria;
    }
}