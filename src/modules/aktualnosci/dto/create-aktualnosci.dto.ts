import { IsNotEmpty } from 'class-validator'

export class CreateAktualnosciDTO {
    @IsNotEmpty()
    data_opublikowania: string;

    @IsNotEmpty()
    tytul: string;

    @IsNotEmpty()
    opis: string;

    @IsNotEmpty()
    zdjecie: string;
}