import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { RodzajPracownikaController } from "./rodzaj-pracownika.controller";
import { RodzajPracownikaRepository } from "./rodzaj-pracownika.repository";
import { RodzajPracownikaService } from "./rodzaj-pracownika.service";

@Module({
    imports: [ 
        TypeOrmModule.forFeature([RodzajPracownikaRepository]
    )],
    controllers: [RodzajPracownikaController],
    providers: [RodzajPracownikaService],
})
export class RodzajPracownikaModule {}