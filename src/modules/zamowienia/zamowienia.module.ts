import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ZamowieniaController } from "./zamowienia.controller";
import { ZamowieniaRepository } from "./zamowienia.repository";
import { ZamowieniaService } from "./zamowienia.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ZamowieniaRepository])
    ],
    controllers: [ZamowieniaController],
    providers: [ZamowieniaService]
})
export class ZamowieniaModule {}