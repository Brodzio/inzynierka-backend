import { IsNotEmpty } from "class-validator";

export class CreatePlatnosciDTO {
    @IsNotEmpty()
    data_platnosci: string;
}