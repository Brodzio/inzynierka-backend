import { Controller } from "@nestjs/common";
import { RodzajPracownikaService } from "./rodzaj-pracownika.service";

@Controller('rodzaj-pracownika')
export class RodzajPracownikaController {
    constructor(private rodzajPracownikaService: RodzajPracownikaService) {}
}