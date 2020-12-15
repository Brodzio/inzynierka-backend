import { Controller } from "@nestjs/common";
import { PozycjePlatnosciService } from "./pozycje-platnosci.service";

@Controller('payment-positions')
export class PozycjePlatnosciController {
    constructor(private pozycjePlatnosciService: PozycjePlatnosciService) {}
}