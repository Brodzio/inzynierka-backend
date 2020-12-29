import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProducenciService } from "./producenci.service";
import { CreateProducenciDTO } from './dto/create-producenci.dto';
import { Producenci } from './producenci.entity';

@Controller('producers')
export class ProducenciController {
    constructor(private producenciService: ProducenciService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createProducenci(
        @Body() createProducenciDTO: CreateProducenciDTO,
    ): Promise<Producenci> {
        return this.producenciService.createProducenci(createProducenciDTO);
    }

    @Get()
    getProducenci(): Promise<Producenci[]> {
        return this.producenciService.getProducenci();
    }

    @Get('/:id')
    getProducenciById(
        @Param('id', ParseIntPipe) id : number): Promise<Producenci> {
        return this.producenciService.getProducenciById(id);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateProducenci(
        @Param('id', ParseIntPipe) id: number,
        @Body() createProducenciDTO: CreateProducenciDTO,
        ): Promise<Producenci> {
        return this.producenciService.updateProducenci(id, createProducenciDTO);
    }

    @Delete('/:id')
    deleteProducenci(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.producenciService.deleteProducenci(id);
    }
}