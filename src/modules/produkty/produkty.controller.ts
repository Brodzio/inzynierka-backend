import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Request, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProduktyService } from './produkty.service';
import { CreateProduktyDto } from './dto/create-produkt.dto';
import { Produkty } from "./produkty.entity";
import { UpdateProduktyDto } from "./dto/update-produkty.dto";
import { JwtPracownikAuthGuard } from "src/auth/jwt-pracownik-auth.guards";
import { JwtAuthGuard } from '../../auth/jwt-auth.guards';
import { UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { storage } from "src/config/storage.config";

@Controller('products')
export class ProduktyController {

    constructor(private produktyService: ProduktyService) {}

    @Post()
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    createProdukt(
        @Body() creatProduktyDto: CreateProduktyDto,
    ): Promise<Produkty> {
        return this.produktyService.createProdukt(creatProduktyDto);
    }

    @Get()
    getProdukty(): Promise<Produkty[]> {
        return this.produktyService.getProdukty();
    }

    @Get('/:id')
    getProduktyById(@Param('id', ParseIntPipe) id: number): Promise<Produkty> {
        return this.produktyService.getProduktyById(id);
    }

    @Put('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    updateProdukty(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateProdukty: UpdateProduktyDto,
        ): Promise<Produkty> {
        return this.produktyService.updateProdukty(id, updateProdukty);
    }

    @Delete('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    delteProdukty(@Param('id', ParseIntPipe)id : number): Promise<void> {
        return this.produktyService.deleteProdukty(id);
    }
}