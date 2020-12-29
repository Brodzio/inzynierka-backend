import { IsNotEmpty } from "class-validator";
import { Producenci } from '../../producenci/producenci.entity';
import { Kategorie } from '../../kategorie/kategorie.entity';
import { StawkaVat } from "src/modules/stawka-vat/stawka-vat.entity";
import { JednostkiMiary } from "src/modules/jednostki-miary/jednostki-miary.entity";

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

    producenci: Producenci | number;

    kategorie: Kategorie | number;

    stawka_vat: StawkaVat | number;

    jednostki_miary: JednostkiMiary | number;
}