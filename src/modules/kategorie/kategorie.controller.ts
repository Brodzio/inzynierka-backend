import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Kategorie } from "./kategorie.entity";
import { KategorieService } from "./kategorie.service";
import { CreateKategorieDTO } from './dto/create-kategorie.dto';

@Controller('category')
export class KategorieController {
    constructor(private kategorieService: KategorieService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createKategorie(
        @Body() createKategorieDTO: CreateKategorieDTO,
    ): Promise<Kategorie> {
        return this.kategorieService.createKategorie(createKategorieDTO);
    }

    @Get()
    getKategorie(): Promise<Kategorie[]> {
        return this.kategorieService.getKategorie();
    }

    @Get('/:id')
    getKategorieById(
        @Param('id', ParseIntPipe) id : number): Promise<Kategorie> {
        return this.kategorieService.getKategorieById(id);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateKategorie(
        @Param('id', ParseIntPipe) id: number,
        @Body() createKategorieDTO: CreateKategorieDTO,
        ): Promise<Kategorie> {
        return this.kategorieService.updateKategorie(id, createKategorieDTO);
    }

    @Delete('/:id')
    deleteKategorie(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.kategorieService.deleteKategorie(id);
    }
}