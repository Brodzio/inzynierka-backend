import { IsNotEmpty } from 'class-validator'

export class UpdateKomentarzeDTO {
    @IsNotEmpty()
    data_modyfikacji: string;

    @IsNotEmpty()
    opis: string;
}