import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ZdjeciaProduktowService } from "./zdjecia-produktow.service";
import { ZdjeciaProduktow } from './zdjecia-produktow.entity';
import { CreateZdjeciaProduktowDTO } from "./dto/create-zdjecia-produktow.dto";

@Controller('product-photos')
export class ZdjeciaProduktowController {
    constructor(private zdjeciaProduktowService: ZdjeciaProduktowService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createZdjeciaProduktow(
        @Body() createZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO,
    ): Promise<ZdjeciaProduktow> {
        return this.zdjeciaProduktowService.createZdjeciaProduktow(createZdjeciaProduktowDTO);
    }

    @Get()
    getZdjeciaProduktow(): Promise<ZdjeciaProduktow[]> {
        return this.zdjeciaProduktowService.getZdjeciaProduktow();
    }

    @Get('/:id')
    getZdjeciaProduktowById(
        @Param('id', ParseIntPipe) id : number): Promise<ZdjeciaProduktow> {
        return this.zdjeciaProduktowService.getZdjeciaProduktowById(id);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateZdjeciaProduktow(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO,
        ): Promise<ZdjeciaProduktow> {
        return this.zdjeciaProduktowService.updateZdjeciaProduktow(id, updateZdjeciaProduktowDTO);
    }

    @Delete('/:id')
    deleteZdjeciaProduktow(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.zdjeciaProduktowService.deleteZdjeciaProduktow(id);
    }
}