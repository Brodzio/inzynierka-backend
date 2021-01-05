import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { FakturyService } from "./faktury.service";
import { CreateFakturyDto } from './dto/create-faktury.dto';
import { Faktury } from "./faktury.entity";
import { JwtPracownikAuthGuard } from "src/auth/jwt-pracownik-auth.guards";

@Controller('invoices')
@UseGuards(JwtPracownikAuthGuard)
export class FakturyController {
    constructor(private fakturyService: FakturyService) {}

    @Get()
    getFaktury(): Promise<Faktury[]> {
        return this.fakturyService.getFaktury();
    }

    @Get('/:id')
    getFakturyById(
        @Param('id', ParseIntPipe) id : number): Promise<Faktury> {
        return this.fakturyService.getFakturyById(id);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateFaktury(
        @Param('id', ParseIntPipe) id: number,
        @Body() createFakturyDto: CreateFakturyDto,
        ): Promise<Faktury> {
        return this.fakturyService.updateFaktury(id, createFakturyDto);
    }

    @Delete('/:id')
    deleteFaktury(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.fakturyService.deleteFaktury(id);
    }
}