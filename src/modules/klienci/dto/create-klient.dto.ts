import { IsNotEmpty, IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { Adresy } from '../../adresy/adresy.entity';

export class CreateKlientDto {

    imie: string;

    nazwisko: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    login: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' },
    )
    haslo: string;

    nazwa_firmy: string;

    regon: string;

    nip: string;

    nr_tel: string;

    email: string;

    adresy: Adresy;
}