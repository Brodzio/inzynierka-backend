import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PlatnosciController } from "./platnosci.controller";
import { PlatnosciRepository } from "./platnosci.repository";
import { PlatnosciService } from "./platnosci.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([PlatnosciRepository])
    ],
    controllers: [PlatnosciController],
    providers: [PlatnosciService]
})
export class PlatnosciModule {}