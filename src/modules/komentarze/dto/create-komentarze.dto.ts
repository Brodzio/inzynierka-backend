import { IsNotEmpty } from 'class-validator'

export class CreateKomentarzeDTO {
     @IsNotEmpty()
     data_dodania: string;

     @IsNotEmpty()
     data_modyfikacji: string;

     @IsNotEmpty()
     opis: string;
}