import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Adresy } from './adresy.entity';
import { CreateAdresyDto } from './dto/create-adresy.dto';

@EntityRepository(Adresy)
export class AdresyRepository extends Repository<Adresy> {
    async createAdresy(createAdresyDTO: CreateAdresyDto): Promise<Adresy> {
        const { wojewodztwo, miejscowosc, ulica, nr_budynku, nr_lokalu, kod_pocztowy } = createAdresyDTO;

        const adress = new Adresy();
        adress.wojewodztwo = wojewodztwo;
        adress.miejscowosc = miejscowosc;
        adress.ulica = ulica;
        adress.nr_budynku = nr_budynku;
        if (nr_lokalu && nr_lokalu != "null") {
            adress.nr_lokalu = nr_lokalu;
        } else {
            adress.nr_lokalu = "null";
        }
        adress.kod_pocztowy = kod_pocztowy;

        try {
            await adress.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return adress;
    }
}