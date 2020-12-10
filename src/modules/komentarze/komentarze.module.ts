import { TypeOrmModule } from '@nestjs/typeorm';
import { KomentarzeRepository } from './komentarze.repository';
import { KomentarzeController } from './komentarze.controller';
import { KomentarzeServie } from './komentarze.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([KomentarzeRepository]),
    ],
    controllers: [KomentarzeController],
    providers: [KomentarzeServie],
})
export class KomentarzeModule {}
