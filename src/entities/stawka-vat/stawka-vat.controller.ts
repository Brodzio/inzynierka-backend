import { StawkaVatService } from './stawka-vat.service';
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class StawkaVatController {

    constructor(private stawkaVatService: StawkaVatService){

    }
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('/create')
  createOne(): string {
    this.stawkaVatService.createOne({ id_vat: null, stawka_vat: '12' });
    return 'sucess';
  }
}