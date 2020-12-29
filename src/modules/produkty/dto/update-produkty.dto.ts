import { IsNotEmpty } from "class-validator";
import { JednostkiMiary } from "src/modules/jednostki-miary/jednostki-miary.entity";
import { Kategorie } from "src/modules/kategorie/kategorie.entity";
import { Producenci } from "src/modules/producenci/producenci.entity";
import { StawkaVat } from "src/modules/stawka-vat/stawka-vat.entity";

export class UpdateProduktyDto {
    @IsNotEmpty()
    cena_brutto: string;

    @IsNotEmpty()
    cena_netto: string;

    @IsNotEmpty()
    opis: string;

    @IsNotEmpty()
    ilosc: string;

    producenci: Producenci | number;

    kategorie: Kategorie | number;

    stawka_vat: StawkaVat | number;

    jednostki_miary: JednostkiMiary | number;
}