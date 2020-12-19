import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { PlatnosciService } from "./platnosci.service";
import { Platnosci } from './platnosci.entity';
import { CreatePlatnosciDTO } from "./dto/create-platnosci.dto";

@Controller('payments')
export class PlatnosciController {
    constructor(private platnosciService: PlatnosciService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createPlatnosci(
        @Body() createPlatnosciDTO: CreatePlatnosciDTO,
    ): Promise<Platnosci> {
        return this.platnosciService.createPlatnosci(createPlatnosciDTO);
    }

    @Get()
    getPlatnosci(): Promise<Platnosci[]> {
        return this.platnosciService.getPlatnosci();
    }

    @Get('/:id')
    getPlatnosciById(
        @Param('id', ParseIntPipe) id : number): Promise<Platnosci> {
        return this.platnosciService.getPlatnosciById(id);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updatePlatnosci(
        @Param('id', ParseIntPipe) id: number,
        @Body() createPlatnosciDTO: CreatePlatnosciDTO,
        ): Promise<Platnosci> {
        return this.platnosciService.updatePlatnosci(id, createPlatnosciDTO);
    }

    @Delete('/:id')
    deletePlatnosci(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.platnosciService.deletePlatnosci(id);
    }
}