import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProduktyService } from './produkty.service';
import { CreateProduktyDto } from './dto/create-produkt.dto';
import { Produkty } from "./produkty.entity";

@Controller('produkty')
export class ProduktyController {

    constructor(private produktyService: ProduktyService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createProdukt(@Body() creatProduktyDto: CreateProduktyDto): Promise<Produkty> {
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

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateProdukty(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateProdukty: CreateProduktyDto,
        ): Promise<Produkty> {
            return this.produktyService.updateProdukty(id, updateProdukty);
        }
}