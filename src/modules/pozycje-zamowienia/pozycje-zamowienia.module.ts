import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PozycjeZamowieniaController } from "./pozycje-zamowienia.controller";
import { PozycjeZamowieniaRepository } from "./pozycje-zamowienia.repository";
import { PozycjeZamowieniaService } from "./pozycje-zamowienia.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([PozycjeZamowieniaRepository])
    ],
    controllers: [PozycjeZamowieniaController],
    providers: [PozycjeZamowieniaService]
})
export class PozycjeZamowieniaModule {}