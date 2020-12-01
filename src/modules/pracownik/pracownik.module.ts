import { PracownikService } from './pracownik.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pracownik } from './pracownik.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pracownik])],
  providers: [PracownikService],
  exports: [PracownikService]
})
export class PracownikModule {}