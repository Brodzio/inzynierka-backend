import { IsNotEmpty } from 'class-validator';
import { Adresy } from '../../adresy/adresy.entity';
import { DaneSklepu } from '../../dane-sklepu/dane-sklepu.entity';
import { Klienci } from '../../klienci/klienci.entity';

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

    @IsNotEmpty()
    adresy: Adresy | number;

    dane_sklepu: DaneSklepu | number;

    @IsNotEmpty()
    klienci: Klienci | number;
}