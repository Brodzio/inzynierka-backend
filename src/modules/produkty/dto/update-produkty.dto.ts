import { IsNotEmpty } from "class-validator";

export class UpdateProduktyDto {
    @IsNotEmpty()
    cena_brutto: string;

    @IsNotEmpty()
    cena_netto: string;

    @IsNotEmpty()
    opis: string;

    @IsNotEmpty()
    ilosc: string;
}