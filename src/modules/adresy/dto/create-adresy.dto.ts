import { IsNotEmpty } from "class-validator";

export class CreateAdresyDto {
    @IsNotEmpty()
    wojewodztwo: string;

    @IsNotEmpty()
    miejscowosc: string

    @IsNotEmpty()
    ulica: string;

    @IsNotEmpty()
    nr_budynku: string;

    nr_lokalu: string;

    @IsNotEmpty()
    kod_pocztowy: string;
}