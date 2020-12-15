import { Controller } from "@nestjs/common";
import { PozycjeZamowieniaService } from "./pozycje-zamowienia.service";

@Controller('order-positions')
export class PozycjeZamowieniaController {
    constructor(private pozycjeZamowieniaService: PozycjeZamowieniaService) {}
}