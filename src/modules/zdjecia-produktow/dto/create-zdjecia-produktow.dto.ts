import { IsNotEmpty } from 'class-validator'

export class CreateZdjeciaProduktowDTO {

    @IsNotEmpty()
    nazwa: string

    @IsNotEmpty()
    data_dodania: Date;
}