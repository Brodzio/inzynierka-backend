import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { RodzajePlatnosciRepository } from "./rodzaje-platnosci.repository";
import { RodzajePlatnosciController } from './rodzaje-platnosci.controller';
import { RodzajePlatnosciService } from "./rodzaje-platnosci.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([RodzajePlatnosciRepository])
    ],
    controllers: [RodzajePlatnosciController],
    providers: [RodzajePlatnosciService],
    exports: [RodzajePlatnosciService]
})
export class RodzajePlatnosciModule {}