import { KlienciService } from './klienci.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KlienciController } from './klienci.controller';
import { KlienciRepository } from './klient.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([KlienciRepository]),
  ],
  controllers: [KlienciController],
  providers: [KlienciService],
  exports: [KlienciService]
  })
export class KlienciModule {}