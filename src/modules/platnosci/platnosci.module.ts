import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PlatnosciController } from "./platnosci.controller";
import { PlatnosciRepository } from "./platnosci.repository";
import { PlatnosciService } from "./platnosci.service";
import { RodzajePlatnosciModule } from '../rodzaje-platnosci/rodzaje-platnosci.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([PlatnosciRepository]),
        RodzajePlatnosciModule
    ],
    controllers: [PlatnosciController],
    providers: [PlatnosciService],
    exports: [PlatnosciService]
})
export class PlatnosciModule {}