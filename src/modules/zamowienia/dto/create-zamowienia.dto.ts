import { IsNotEmpty } from "class-validator";
import { Adresy } from "src/modules/adresy/adresy.entity";
import { Klienci } from "src/modules/klienci/klienci.entity";

export class CreateZamowieniDTO {

    @IsNotEmpty()
    id: number;

    rodzaj_dokumentu: string;

    produkty: {id:number, ilosc: number}[];
}