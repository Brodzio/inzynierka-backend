import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { DaneSklepu } from "./dane-sklepu.entity";
import { DaneSklepuService } from "./dane-sklepu.service";
import { CreateDaneSklepuDTO } from './dto/create-dane-sklepu.dto';

@Controller('company-details')
export class DaneSklepuController {
    constructor(private daneSklepuServie: DaneSklepuService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createDaneSklepu(
        @Body() createDaneSklepuDTO: CreateDaneSklepuDTO,
    ): Promise<DaneSklepu> {
        return this.daneSklepuServie.createDaneSklepu(createDaneSklepuDTO);
    }

    @Get()
    getDaneSklepu(): Promise<DaneSklepu[]> {
        return this.daneSklepuServie.getDaneSklepu();
    }

    @Get('/:id')
    getDaneSklepuById(
        @Param('id', ParseIntPipe) id : number): Promise<DaneSklepu> {
        return this.daneSklepuServie.getDaneSklepuById(id);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateDaneSklepu(
        @Param('id', ParseIntPipe) id: number,
        @Body() createDaneSklepuDTO: CreateDaneSklepuDTO,
        ): Promise<DaneSklepu> {
        return this.daneSklepuServie.updateDaneSklepu(id, createDaneSklepuDTO);
    }

    @Delete('/:id')
    deleteDaneSklepu(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.daneSklepuServie.deleteDaneSklepu(id);
    }
}