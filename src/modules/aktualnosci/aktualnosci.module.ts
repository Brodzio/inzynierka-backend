import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AktualnosciController } from "./aktualnosci.controller";
import { AktualnosciRepository } from "./aktualnosci.repository";
import { AktualnosciService } from "./aktualnosci.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AktualnosciRepository])
    ],
    controllers: [AktualnosciController],
    providers: [AktualnosciService],
})
export class AktualnosciModule {}