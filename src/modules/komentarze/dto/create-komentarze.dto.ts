import { IsNotEmpty } from 'class-validator'

export class CreateKomentarzeDTO {
     @IsNotEmpty()
     data_dodania: string;

     data_modyfikacji: string;

     @IsNotEmpty()
     opis: string;
}