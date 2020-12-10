import { IsNotEmpty } from 'class-validator'

export class CreateAktualnosciDTO {
    @IsNotEmpty()
    data_opublikowania: Date;

    @IsNotEmpty()
    tytul: string;

    @IsNotEmpty()
    opis: string;

    @IsNotEmpty()
    zdjecie: string;
}