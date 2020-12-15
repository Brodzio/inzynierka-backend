import { IsNotEmpty } from "class-validator";

export class CreateProducenciDTO {
    @IsNotEmpty()
    nazwa_producenta: string;
}