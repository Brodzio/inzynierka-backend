import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ZamowieniaService } from "./zamowienia.service";
import { CreateZamowieniDTO } from './dto/create-zamowienia.dto';
import { Zamowienia } from './zamowienia.entity';

@Controller('orders')
export class ZamowieniaController {
    constructor(private zamowieniaService: ZamowieniaService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createZamowienia(
        @Body() createZamowieniaDTO: CreateZamowieniDTO,
    ): Promise<Zamowienia> {
        return this.zamowieniaService.createZamowienia(createZamowieniaDTO);
    }

    @Get()
    getZamowienia(): Promise<Zamowienia[]> {
        return this.zamowieniaService.getZamowienia();
    }

    @Get('/:id')
    getZamowieniaById(
        @Param('id', ParseIntPipe) id : number): Promise<Zamowienia> {
        return this.zamowieniaService.getZamowieniaById(id);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateZamowienia(
        @Param('id', ParseIntPipe) id: number,
        @Body() createZamowieniaDTO: CreateZamowieniDTO,
        ): Promise<Zamowienia> {
        return this.zamowieniaService.updateZamowienia(id, createZamowieniaDTO);
    }

    @Delete('/:id')
    deleteZamowienia(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.zamowieniaService.deleteZamowienia(id);
    }
}