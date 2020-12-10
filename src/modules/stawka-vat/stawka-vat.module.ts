import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StawkaVatService } from './stawka-vat.service';
import { StawkaVatController } from './stawka-vat.controller';
import { StawkaVatRepository } from './stawka-vat.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StawkaVatRepository])],
  providers: [StawkaVatService],
  controllers: [StawkaVatController],
})
export class StawkaVatModule {}