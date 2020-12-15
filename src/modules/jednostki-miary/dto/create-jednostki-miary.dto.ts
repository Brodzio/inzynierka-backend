import { IsNotEmpty } from "class-validator";

export class CreateJednostkiMiaryDTO {

    @IsNotEmpty()
    nazwa: string;
}