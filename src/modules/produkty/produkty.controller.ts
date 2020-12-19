import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProduktyService } from './produkty.service';
import { CreateProduktyDto } from './dto/create-produkt.dto';
import { Produkty } from "./produkty.entity";
import { UpdateProduktyDto } from "./dto/update-produkty.dto";

@Controller('products')
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
        @Body() updateProdukty: UpdateProduktyDto,
        ): Promise<Produkty> {
        return this.produktyService.updateProdukty(id, updateProdukty);
    }

    @Delete('/:id')
    delteProdukty(@Param('id', ParseIntPipe)id : number): Promise<void> {
        return this.produktyService.deleteProdukty(id);
    }
}