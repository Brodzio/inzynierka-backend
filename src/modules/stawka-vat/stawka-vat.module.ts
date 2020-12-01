import { StawkaVat } from './stawka-vat.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StawkaVatService } from './stawka-vat.service';
import { StawkaVatController } from './stawka-vat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StawkaVat])],
  providers: [StawkaVatService],
  controllers: [StawkaVatController],
})
export class StawkaVatModule {}