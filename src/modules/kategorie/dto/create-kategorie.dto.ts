import { IsNotEmpty } from "class-validator";

export class CreateKategorieDTO {
    @IsNotEmpty()
    nazwa_kategorii: string;
}