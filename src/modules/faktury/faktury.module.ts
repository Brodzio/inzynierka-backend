import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { FakturyController } from "./faktury.controller";
import { FakturyRepository } from "./faktury.repository";
import { FakturyService } from "./faktury.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([FakturyRepository]),
    ],
    controllers: [FakturyController],
    providers: [FakturyService],
})
export class FakturyModule {}