import { IsNotEmpty } from "class-validator";

export class CreateZamowieniDTO {

    @IsNotEmpty()
    data_zlozenia: string;

    data_przyjecia: string;

    data_wysylki: string;

    data_realizacji: string;
}