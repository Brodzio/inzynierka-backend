import { IsNotEmpty } from "class-validator";
import { Adresy } from "src/modules/adresy/adresy.entity";
import { Klienci } from "src/modules/klienci/klienci.entity";

export class CreateZamowieniDTO {

    @IsNotEmpty()
    data_zlozenia: string;

    data_przyjecia: string;

    data_wysylki: string;

    data_realizacji: string;

    adresy: Adresy | number;
}