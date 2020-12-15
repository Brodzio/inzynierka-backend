import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PozycjeFakturyController } from "./pozycje-faktury.controller";
import { PozycjeFakturyRepository } from "./pozycje-faktury.repository";
import { PozycjeFakturyService } from "./pozycje-faktury.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([PozycjeFakturyRepository])
    ],
    controllers: [PozycjeFakturyController],
    providers: [PozycjeFakturyService]
})
export class PozycjeFakturyModule {}