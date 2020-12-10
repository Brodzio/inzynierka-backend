import { IsNotEmpty } from 'class-validator'

export class UpdateKomentarzeDTO {
    @IsNotEmpty()
    data_modyfikacji: Date;

    @IsNotEmpty()
    opis: string;
}