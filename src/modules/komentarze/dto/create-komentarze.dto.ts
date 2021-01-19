import { IsNotEmpty } from 'class-validator'
import { Produkty } from '../../produkty/produkty.entity';
import { Aktualnosci } from '../../aktualnosci/aktualnosci.entity';

export class CreateKomentarzeDTO {
     @IsNotEmpty()
     opis: string;

     produkty: Produkty | number;

     aktualnosci: Aktualnosci | number;
}