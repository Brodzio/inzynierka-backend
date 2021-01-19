import { IsNotEmpty } from 'class-validator'

export class CreateAktualnosciDTO {
    @IsNotEmpty()
    tytul: string;

    @IsNotEmpty()
    opis: string;

    zdjecie: string;
}