import { ProduktyModule } from './../produkty/produkty.module';
import { KlienciModule } from 'src/modules/klienci/klienci.module';
import { KlienciRepository } from './../klienci/klient.repository';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ZamowieniaController } from "./zamowienia.controller";
import { ZamowieniaRepository } from "./zamowienia.repository";
import { ZamowieniaService } from "./zamowienia.service";

@Module({
    imports: [
        KlienciModule,
        TypeOrmModule.forFeature([ZamowieniaRepository]),
        ProduktyModule
    ],
    controllers: [ZamowieniaController],
    providers: [ZamowieniaService]
})
export class ZamowieniaModule {}