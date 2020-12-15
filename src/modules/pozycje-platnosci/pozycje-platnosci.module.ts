import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PozycjePlatnosciController } from "./pozycje-platnosci.controller";
import { PozycjePlatnosciRepository } from "./pozycje-platnosci.repository";
import { PozycjePlatnosciService } from "./pozycje-platnosci.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([PozycjePlatnosciRepository])
    ],
    controllers: [PozycjePlatnosciController],
    providers: [PozycjePlatnosciService]
})
export class PozycjePlatnosciModule {}