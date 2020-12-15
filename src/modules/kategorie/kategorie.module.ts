import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { KategorieController } from './kategorie.controller';
import { KategorieRepository } from './kategorie.repository';
import { KategorieService } from './kategorie.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([KategorieRepository])
    ],
    controllers: [KategorieController],
    providers: [KategorieService]
})
export class KategorieModule {}