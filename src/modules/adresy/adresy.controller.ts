import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdresyService } from "./adresy.service";
import { Adresy } from './adresy.entity';
import { CreateAdresyDto } from "./dto/create-adresy.dto";

@Controller('adress')
export class AdresyController {
    constructor(private adresyService: AdresyService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createAdresy(
        @Body() createAdresyDTO: CreateAdresyDto,
    ): Promise<Adresy> {
        return this.adresyService.createAdresy(createAdresyDTO);
    }

    @Get()
    getAdresy(): Promise<Adresy[]> {
        return this.adresyService.getAdresy();
    }

    @Get('/:id')
    GetAdresyById(
        @Param('id', ParseIntPipe) id : number): Promise<Adresy> {
        return this.adresyService.GetAdresyById(id);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateAdresy(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateAdresy: CreateAdresyDto,
        ): Promise<Adresy> {
        return this.adresyService.updateAdresy(id, updateAdresy);
    }

    @Delete('/:id')
    deleteAdresy(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.adresyService.deleteAdresy(id);
    }
}