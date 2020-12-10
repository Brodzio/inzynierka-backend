import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdresyController } from "./adresy.controller";
import { AdresyRepository } from "./adresy.repository";
import { AdresyService } from "./adresy.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdresyRepository]),
    ],
    controllers: [AdresyController],
    providers: [AdresyService]
})
export class AdresyModule {}