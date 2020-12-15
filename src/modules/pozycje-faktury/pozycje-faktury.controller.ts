import { Controller } from "@nestjs/common";
import { PozycjeFakturyService } from "./pozycje-faktury.service";

@Controller('invoice-positions')
export class PozycjeFakturyController {
    constructor(private pozycjeFakturyService: PozycjeFakturyService) {}
}