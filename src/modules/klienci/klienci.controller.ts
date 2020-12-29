import { KlienciService } from './klienci.service';
import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe, ParseIntPipe, Put, Delete, UsePipes } from '@nestjs/common';
import { CreateKlientDto } from './dto/create-klient.dto';
import { AuthCredentialsDto } from '../../auth/dto/auth-credentials.dto';
import { JwtPracownikAuthGuard } from 'src/auth/jwt-pracownik-auth.guards';
import { Klienci } from './klienci.entity';
import { JwtAuthGuard } from '../../auth/jwt-auth.guards';

@Controller('clients')
export class KlienciController {

  constructor(
    private klienciService: KlienciService
  ) {}
    
  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body(ValidationPipe) createKlientDto: CreateKlientDto): Promise<void> {
    return this.klienciService.signUp(createKlientDto);
  }

  @Get()
  @UseGuards(JwtPracownikAuthGuard)
  getKlienci(): Promise<Klienci[]> {
      return this.klienciService.getKlienci();
  }

  @Get('/:id')
  @UseGuards(JwtPracownikAuthGuard)
  getKlienciById(
    @Param('id', ParseIntPipe) id : number
  ): Promise<Klienci> {
    return this.klienciService.getKlienciById(id);
  }

  @Put('/:id')
  @UseGuards(JwtPracownikAuthGuard)
  @UsePipes(ValidationPipe)
  updateKlienci(
      @Param('id', ParseIntPipe) id: number,
      @Body() createKlientDto: CreateKlientDto,
      ): Promise<Klienci> {
      return this.klienciService.updateKlienci(id, createKlientDto);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  deleteKlienci(
      @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
      return this.klienciService.deleteKlienci(id);
  }
}