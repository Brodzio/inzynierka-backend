import { IsNotEmpty } from 'class-validator';

export class CreateFakturyDto {

    @IsNotEmpty()
    nr_faktury: string;

    @IsNotEmpty()
    data_sprzedazy: string;

    @IsNotEmpty()
    wartosc_netto: string;

    @IsNotEmpty()
    wartosc_brutto: string;

    @IsNotEmpty()
    wartosc_vat: string;

    @IsNotEmpty()
    rodzaj_dokumentu: string;
}