import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ProducenciController } from "./producenci.controller";
import { ProducenciRepository } from "./producenci.repository";
import { ProducenciService } from "./producenci.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProducenciRepository])
    ],
    controllers: [ProducenciController],
    providers: [ProducenciService]
})
export class ProducenciModule {}