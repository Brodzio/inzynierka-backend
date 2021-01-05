import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ZamowieniaService } from "./zamowienia.service";
import { CreateZamowieniDTO } from './dto/create-zamowienia.dto';
import { Zamowienia } from './zamowienia.entity';
import { JwtPracownikAuthGuard } from '../../auth/jwt-pracownik-auth.guards';
import { JwtAuthGuard } from '../../auth/jwt-auth.guards';
import { CreateFakturyDto } from '../faktury/dto/create-faktury.dto';

@Controller('orders')
export class ZamowieniaController {
    constructor(private zamowieniaService: ZamowieniaService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    createZamowienia(
        @Body() createZamowieniaDTO: CreateZamowieniDTO,
        @Req() req
    ): Promise<Zamowienia> {
        return this.zamowieniaService.createZamowienia(createZamowieniaDTO, req.user);
    }

    @Get()
    @UseGuards(JwtPracownikAuthGuard)
    getZamowienia(): Promise<Zamowienia[]> {
        return this.zamowieniaService.getZamowienia();
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    getZamowieniaById(
        @Param('id', ParseIntPipe) id : number): Promise<Zamowienia> {
        return this.zamowieniaService.getZamowieniaById(id);
    }

    @Patch('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    updateZamowieniaStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() createFakturyDto: CreateFakturyDto
    ): Promise<any> {
        return this.zamowieniaService.updateZamowieniaStatus(id, createFakturyDto);
    }

    @Put('/:id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    updateZamowienia(
        @Param('id', ParseIntPipe) id: number,
        // @Body() createZamowieniaDTO: CreateZamowieniDTO
        ): Promise<Zamowienia> {
        return this.zamowieniaService.updateZamowienia(id);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    deleteZamowienia(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.zamowieniaService.deleteZamowienia(id);
    }
}