import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PracownicyRepository } from './pracownicy.repository';
import { PracownicyController } from './pracownicy.controller';
import { PracownicyService } from './pracownicy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PracownicyRepository]),
  ],
  controllers: [PracownicyController],
  providers: [PracownicyService],
  exports: [PracownicyService]
})
export class PracownicyModule {}