import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ZdjeciaProduktowController } from "./zdjecia-produktow.controller";
import { ZdjeciaProduktowRepository } from "./zdjecia-produktow.repository";
import { ZdjeciaProduktowService } from "./zdjecia-produktow.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ZdjeciaProduktowRepository]),
    ],
    controllers: [ZdjeciaProduktowController],
    providers: [ZdjeciaProduktowService],
})
export class ZdjeciaProduktowModule {}