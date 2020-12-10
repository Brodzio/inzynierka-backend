import { EntityRepository, Repository } from "typeorm";
import { StawkaVat } from "./stawka-vat.entity";
import { CreateStawkaVatDto } from './dto/create-stawka-vat.dto';

@EntityRepository(StawkaVat)
export class StawkaVatRepository extends Repository<StawkaVat> {

    async createStawkaVat(createStawkaVatDto: CreateStawkaVatDto): Promise<StawkaVat> {
        const { stawka_vat } = createStawkaVatDto;

        const vat = new StawkaVat();
        vat.stawka_vat = stawka_vat;

        await vat.save();

        return vat;
    }

    async getStawkaVat(): Promise<StawkaVat[]> {
        const query = this.createQueryBuilder('stawka_vat');

        const vat = await query.getMany();
        return vat;
    }
}