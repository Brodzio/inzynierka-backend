import { IsNotEmpty } from "class-validator";

export class CreateProduktyDto {
    @IsNotEmpty()
    nazwa_produktu: string;

    @IsNotEmpty()
    cena_brutto: string;

    @IsNotEmpty()
    cena_netto: string;

    @IsNotEmpty()
    opis: string;

    @IsNotEmpty()
    ilosc: string;

    @IsNotEmpty()
    kod_produktu: string;
}