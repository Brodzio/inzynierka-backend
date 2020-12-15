import { StawkaVatService } from './stawka-vat.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStawkaVatDto } from './dto/create-stawka-vat.dto';
import { StawkaVat } from './stawka-vat.entity';

@Controller('vat')
export class StawkaVatController {

  constructor(
    private stawkaVatService: StawkaVatService
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  createStawkaVat(@Body() createStawkaVatDto: CreateStawkaVatDto): Promise<StawkaVat> {
    return this.stawkaVatService.createStawkaVat(createStawkaVatDto);
  }

  @Get()
  getStawkaVat(): Promise<StawkaVat[]> {
      return this.stawkaVatService.getStawkaVat();
  }

  @Get('/:id')
  getStawkaVatById(
      @Param('id', ParseIntPipe) id : number,
  ): Promise<StawkaVat> {
      return this.stawkaVatService.getStawkaVatById(id);
    }

  @Delete('/:id')
  deleteStawkaVat(
      @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
      return this.stawkaVatService.deleteStawkaVat(id);
  }

  @Patch('/:id')
  updateStawkaVat(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateStawkaVat: CreateStawkaVatDto,
  ): Promise<StawkaVat> {
      return this.stawkaVatService.updateStawkaVat(id, updateStawkaVat);
  }
}