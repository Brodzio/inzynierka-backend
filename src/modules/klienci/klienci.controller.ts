import { KlienciService } from './klienci.service';
import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Klienci } from './klienci.entity';
import { Response } from 'express';
@Controller('klienci')
export class KlienciController {

    constructor(private klienciService: KlienciService){

    }
    
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

  @Get(':id')
    findOne(@Param('id') id: string,@Res() res: Response): any {
        this.klienciService.findOne(id).then( klient =>{
            console.log(klient);
            res.send(klient);
        });
    }


  @Post('/create')
  createOne(@Body() body: any): any {
      console.log(body);
      let klient: Klienci = new Klienci('Bartek', 'Brod', 'Bar', 'Bro', 'Comarch', '0000', '0000', '123456789', 'abc@abc.pl', '0000');
      this.klienciService.createOne(klient);
    return JSON.parse('{"odpowiedz":"sucess"}');
  }
}