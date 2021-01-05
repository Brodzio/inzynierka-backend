import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { PlatnosciService } from "./platnosci.service";
import { Platnosci } from './platnosci.entity';
import { CreatePlatnosciDTO } from "./dto/create-platnosci.dto";
import { JwtPracownikAuthGuard } from '../../auth/jwt-pracownik-auth.guards';
import { JwtAuthGuard } from "src/auth/jwt-auth.guards";

@Controller('payments')
export class PlatnosciController {
    constructor(private platnosciService: PlatnosciService) {}

    @Get()
    @UseGuards(JwtPracownikAuthGuard)
    getPlatnosci(): Promise<Platnosci[]> {
        return this.platnosciService.getPlatnosci();
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    getPlatnosciById(
        @Param('id', ParseIntPipe) id : number): Promise<Platnosci> {
        return this.platnosciService.getPlatnosciById(id);
    }

    @Put('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    updatePlatnosci(
        @Param('id', ParseIntPipe) id: number,
        @Body() createPlatnosciDTO: CreatePlatnosciDTO,
        ): Promise<Platnosci> {
        return this.platnosciService.updatePlatnosci(id, createPlatnosciDTO);
    }

    @Delete('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    deletePlatnosci(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.platnosciService.deletePlatnosci(id);
    }
}