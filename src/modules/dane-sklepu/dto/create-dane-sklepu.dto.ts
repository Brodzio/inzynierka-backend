import { IsNotEmpty } from 'class-validator';
import { Adresy } from '../../adresy/adresy.entity';

export class CreateDaneSklepuDTO {

    @IsNotEmpty()
    nazwa: string;

    @IsNotEmpty()
    email: string;

    nip: string;

    @IsNotEmpty()
    nr_tel: string;

    @IsNotEmpty()
    adresy: Adresy | number;
}