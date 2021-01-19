import { IsNotEmpty } from 'class-validator'

export class UpdateKomentarzeDTO {
    @IsNotEmpty()
    opis: string;
}