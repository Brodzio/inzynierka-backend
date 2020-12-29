import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { DaneSklepu } from "./dane-sklepu.entity";
import { DaneSklepuService } from "./dane-sklepu.service";
import { CreateDaneSklepuDTO } from './dto/create-dane-sklepu.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guards';
import { JwtPracownikAuthGuard } from "src/auth/jwt-pracownik-auth.guards";

@Controller('company-details')
export class DaneSklepuController {
    constructor(private daneSklepuServie: DaneSklepuService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    createDaneSklepu(
        @Body() createDaneSklepuDTO: CreateDaneSklepuDTO,
    ): Promise<DaneSklepu> {
        return this.daneSklepuServie.createDaneSklepu(createDaneSklepuDTO);
    }

    @Get()
    @UseGuards(JwtPracownikAuthGuard)
    getDaneSklepu(): Promise<DaneSklepu[]> {
        return this.daneSklepuServie.getDaneSklepu();
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    getDaneSklepuById(
        @Param('id', ParseIntPipe) id : number): Promise<DaneSklepu> {
        return this.daneSklepuServie.getDaneSklepuById(id);
    }

    @Put('/:id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    updateDaneSklepu(
        @Param('id', ParseIntPipe) id: number,
        @Body() createDaneSklepuDTO: CreateDaneSklepuDTO,
        ): Promise<DaneSklepu> {
        return this.daneSklepuServie.updateDaneSklepu(id, createDaneSklepuDTO);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    deleteDaneSklepu(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.daneSklepuServie.deleteDaneSklepu(id);
    }
}