import { Controller } from "@nestjs/common";
import { StatusyService } from "./statusy.service";

@Controller('status')
export class StatusyController {
    constructor(private statusyService: StatusyService) {}
}