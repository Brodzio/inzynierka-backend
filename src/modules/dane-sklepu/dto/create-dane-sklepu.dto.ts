import { IsNotEmpty } from 'class-validator';

export class CreateDaneSklepuDTO {

    @IsNotEmpty()
    nazwa: string;

    @IsNotEmpty()
    email: string;

    nip: string;

    @IsNotEmpty()
    nr_tel: string;
}