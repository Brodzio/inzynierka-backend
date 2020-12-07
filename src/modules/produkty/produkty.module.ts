import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduktyController } from './produkty.controller';
import { ProduktyRepository } from './produkty.repository';
import { ProduktyService } from './produkty.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProduktyRepository]),
    ],
    controllers: [ProduktyController],
    providers: [ProduktyService],
})
export class ProduktyModule {}
