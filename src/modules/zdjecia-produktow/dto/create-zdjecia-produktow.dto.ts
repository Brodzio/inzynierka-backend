import { IsNotEmpty } from 'class-validator'
import { Produkty } from 'src/modules/produkty/produkty.entity';

export class CreateZdjeciaProduktowDTO {

    @IsNotEmpty()
    nazwa: string

    @IsNotEmpty()
    data_dodania: string;

    produkty: Produkty | number;
}