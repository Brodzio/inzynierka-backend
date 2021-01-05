import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { RodzajePlatnosciService } from "./rodzaje-platnosci.service";
import { CreateRodzajePlatnosciDTO } from './dto/create-rodzaje-platnosci.dto';
import { RodzajePlatnosci } from "./rodzaje-platnosci.entity";

@Controller('payments-types')
export class RodzajePlatnosciController {
    constructor(private rodzajePlatnosciService: RodzajePlatnosciService) {}

    @Get()
    getRodzajePlatnosci(): Promise<RodzajePlatnosci[]> {
        return this.rodzajePlatnosciService.getRodzajePlatnosci();
    }

    @Get('/:id')
    getRodzajePlatnosciById(
        @Param('id', ParseIntPipe) id : number): Promise<RodzajePlatnosci> {
        return this.rodzajePlatnosciService.getRodzajePlatnosciById(id);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateRodzajePlatnosci(
        @Param('id', ParseIntPipe) id: number,
        @Body() createRodzajePlatnosciDTO: CreateRodzajePlatnosciDTO,
        ): Promise<RodzajePlatnosci> {
        return this.rodzajePlatnosciService.updateRodzajePlatnosci(id, createRodzajePlatnosciDTO);
    }

    @Delete('/:id')
    deleteRodzajePlatnosci(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.rodzajePlatnosciService.deleteRodzajePlatnosci(id);
    }
}