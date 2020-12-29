import { IsNotEmpty } from 'class-validator';

export class CreateStawkaVatDto {
    @IsNotEmpty()
    stawka_vat: string;

    @IsNotEmpty()
    stawka_proc: number;
}
