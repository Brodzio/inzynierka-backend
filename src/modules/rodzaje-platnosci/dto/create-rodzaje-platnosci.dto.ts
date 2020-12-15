import { IsNotEmpty } from "class-validator";

export class CreateRodzajePlatnosciDTO {
    @IsNotEmpty()
    nazwa_platnosci: string;
}