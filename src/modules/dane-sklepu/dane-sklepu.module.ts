import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaneSklepuController } from "./dane-sklepu.controller";
import { DaneSklepuRepository } from "./dane-sklepu.repository";
import { DaneSklepuService } from "./dane-sklepu.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([DaneSklepuRepository]),
    ],
    controllers: [DaneSklepuController],
    providers: [DaneSklepuService],
})
export class DaneSklepuModule {}