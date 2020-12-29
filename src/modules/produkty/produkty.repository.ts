import { EntityRepository, Repository } from 'typeorm';
import { Produkty } from './produkty.entity';
import { CreateProduktyDto } from './dto/create-produkt.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Produkty)
export class ProduktyRepository extends Repository<Produkty> {
 
    async createProdukt(
        createProduktyDto: CreateProduktyDto,
        //req
    ): Promise<Produkty> {
        const { nazwa_produktu, cena_brutto, cena_netto, opis, ilosc, kod_produktu, producenci } = createProduktyDto;

        const produkty = new Produkty();
        produkty.nazwa_produktu = nazwa_produktu;
        produkty.cena_brutto = cena_brutto;
        produkty.cena_netto = cena_netto;
        produkty.opis = opis;
        produkty.ilosc = ilosc;
        produkty.kod_produktu = kod_produktu;
        produkty.producenci = producenci;

        try {
            await produkty.save();
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return produkty;
    }

    async getProdukty(): Promise<Produkty[]> {
        const query = this.createQueryBuilder('produkty');

        const produkty = await query.getMany();
        return produkty;
    }
}