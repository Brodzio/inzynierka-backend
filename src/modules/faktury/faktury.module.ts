import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { FakturyController } from "./faktury.controller";
import { FakturyRepository } from "./faktury.repository";
import { FakturyService } from "./faktury.service";
import { PozycjeZamowieniaModule } from '../pozycje-zamowienia/pozycje-zamowienia.module';
import { DaneSklepuModule } from '../dane-sklepu/dane-sklepu.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([FakturyRepository]),
        PozycjeZamowieniaModule,
        DaneSklepuModule
    ],
    controllers: [FakturyController],
    providers: [FakturyService],
    exports: [FakturyService]
})
export class FakturyModule {}