import { IsNotEmpty } from 'class-validator'

export class UpdateAktualnosciDTO {
    @IsNotEmpty()
    tytul: string;

    @IsNotEmpty()
    opis: string;

    @IsNotEmpty()
    zdjecie: string;
}