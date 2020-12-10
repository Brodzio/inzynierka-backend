import { IsNotEmpty } from 'class-validator'

export class CreateKomentarzeDTO {
     @IsNotEmpty()
     data_dodania: Date;

     data_modyfikacji: Date;

     @IsNotEmpty()
     opis: string;
}