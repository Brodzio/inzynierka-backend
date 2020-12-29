import { IsNotEmpty } from "class-validator";
import { RodzajePlatnosci } from '../../rodzaje-platnosci/rodzaje-platnosci.entity';

export class CreatePlatnosciDTO {
    @IsNotEmpty()
    data_platnosci: string;

    rodzje_platnosci: RodzajePlatnosci | number;
}