import { IsNotEmpty } from 'class-validator'
import { Produkty } from '../../produkty/produkty.entity';
import { Aktualnosci } from '../../aktualnosci/aktualnosci.entity';

export class CreateKomentarzeDTO {
     @IsNotEmpty()
     data_dodania: string;

     data_modyfikacji: string;

     @IsNotEmpty()
     opis: string;

     produkty: Produkty | number;

     aktualnosci: Aktualnosci | number;
}