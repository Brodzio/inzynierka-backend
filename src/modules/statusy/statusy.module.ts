import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { StatusyController } from "./statusy.controller";
import { StatusyRepository } from "./statusy.repository";
import { StatusyService } from "./statusy.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([StatusyRepository])
    ],
    controllers: [StatusyController],
    providers: [StatusyService]
})
export class StatusyModule {}