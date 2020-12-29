import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdresyService } from "./adresy.service";
import { Adresy } from './adresy.entity';
import { CreateAdresyDto } from "./dto/create-adresy.dto";
import { JwtAuthGuard } from '../../auth/jwt-auth.guards';
import { JwtPracownikAuthGuard } from '../../auth/jwt-pracownik-auth.guards';

@Controller('adress')
export class AdresyController {
    constructor(private adresyService: AdresyService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    createAdresy(
        @Body() createAdresyDTO: CreateAdresyDto,
    ): Promise<Adresy> {
        return this.adresyService.createAdresy(createAdresyDTO);
    }

    @Get()
    @UseGuards(JwtPracownikAuthGuard)
    getAdresy(): Promise<Adresy[]> {
        return this.adresyService.getAdresy();
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    getAdresyById(
        @Param('id', ParseIntPipe) id : number): Promise<Adresy> {
        return this.adresyService.getAdresyById(id);
    }

    @Put('/:id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    updateAdresy(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateAdresy: CreateAdresyDto,
        ): Promise<Adresy> {
        return this.adresyService.updateAdresy(id, updateAdresy);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    deleteAdresy(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.adresyService.deleteAdresy(id);
    }
}