import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { FakturyService } from "./faktury.service";
import { CreateFakturyDto } from './dto/create-faktury.dto';
import { Faktury } from "./faktury.entity";

@Controller('invoices')
export class FakturyController {
    constructor(private fakturyService: FakturyService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createFaktury(
        @Body() createFakturyDto: CreateFakturyDto,
    ): Promise<Faktury> {
        return this.fakturyService.createFaktury(createFakturyDto);
    }

    @Get()
    getFaktury(): Promise<Faktury[]> {
        return this.fakturyService.getFaktury();
    }

    @Get('/:id')
    getFakturyById(
        @Param('id', ParseIntPipe) id : number): Promise<Faktury> {
        return this.fakturyService.getFakturyById(id);
    }

    @Patch('/:id')
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