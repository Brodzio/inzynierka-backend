import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { JednostkiMiaryController } from './jednostki-miary.controller';
import { JednostkiMiaryRepository } from './jednostki-miary.repository';
import { JednostkiMiaryService } from './jednostki-miary.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([JednostkiMiaryRepository])
    ],
    controllers: [JednostkiMiaryController],
    providers: [JednostkiMiaryService]
})
export class JednostkiMiaryModule {}