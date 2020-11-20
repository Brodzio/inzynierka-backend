import { KlienciService } from './klienci.service';
import { Klienci } from './klienci.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KlienciController } from './klienci.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Klienci])],
  providers: [KlienciService],
  controllers: [KlienciController],
})
export class KlienciModule {}