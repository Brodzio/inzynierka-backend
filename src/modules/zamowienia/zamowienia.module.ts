import { ProduktyModule } from './../produkty/produkty.module';
import { KlienciModule } from 'src/modules/klienci/klienci.module';
import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ZamowieniaController } from "./zamowienia.controller";
import { ZamowieniaRepository } from "./zamowienia.repository";
import { ZamowieniaService } from './zamowienia.service';
import { FakturyModule } from '../faktury/faktury.module';
import { PlatnosciModule } from '../platnosci/platnosci.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ZamowieniaRepository]),
        ProduktyModule,
        KlienciModule,
        FakturyModule,
        PlatnosciModule
    ],
    controllers: [ZamowieniaController],
    providers: [ZamowieniaService],
    exports: [ZamowieniaService]
})
export class ZamowieniaModule {}