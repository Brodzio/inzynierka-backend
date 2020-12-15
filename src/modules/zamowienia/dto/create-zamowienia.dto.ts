import { IsNotEmpty } from "class-validator";

export class CreateZamowieniDTO {

    @IsNotEmpty()
    data_zlozenia: Date;

    data_przyjecia: Date;

    data_wysylki: Date;

    data_realizacji: Date;
}