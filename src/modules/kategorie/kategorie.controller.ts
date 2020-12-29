import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { Kategorie } from "./kategorie.entity";
import { KategorieService } from "./kategorie.service";
import { CreateKategorieDTO } from './dto/create-kategorie.dto';
import { JwtPracownikAuthGuard } from '../../auth/jwt-pracownik-auth.guards';

@Controller('category')
@UseGuards(JwtPracownikAuthGuard)
export class KategorieController {
    constructor(private kategorieService: KategorieService) {}

    @Post()
    @UseGuards(JwtPracownikAuthGuard)
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

    @Put('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    updateKategorie(
        @Param('id', ParseIntPipe) id: number,
        @Body() createKategorieDTO: CreateKategorieDTO,
        ): Promise<Kategorie> {
        return this.kategorieService.updateKategorie(id, createKategorieDTO);
    }

    @Delete('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    deleteKategorie(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.kategorieService.deleteKategorie(id);
    }
}