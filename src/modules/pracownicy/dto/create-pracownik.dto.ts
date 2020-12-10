import { IsNotEmpty, IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class CreatePracownikDto {
    @IsNotEmpty()
    imie: string;

    @IsNotEmpty()
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

    @IsNotEmpty()
    nr_tel: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    data_zatrudnienia: Date;

    @IsNotEmpty()
    data_zwolnienia: Date;
}