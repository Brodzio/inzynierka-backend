import { Body, Controller, Post, UseGuards, ValidationPipe, UsePipes, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { JwtAdminAuthGuard } from 'src/auth/jwt-admin-auth.guards';
import { CreatePracownicyDto } from './dto/create-pracownicy.dto';
import { Pracownicy } from './pracownicy.entity';
import { PracownicyService } from './pracownicy.service';

@Controller('workers')
@UseGuards(JwtAdminAuthGuard)
export class PracownicyController {
    constructor(
        private pracownicyService: PracownicyService,
    ) {}

    @Post()
    @UsePipes(ValidationPipe)
    createPracownicy(
        @Body() createPracownicyDto: CreatePracownicyDto,
    ): Promise<Pracownicy> {
        return this.pracownicyService.createPracownicy(createPracownicyDto);
    }

    @Get()
    getPracownicy(): Promise<Pracownicy[]> {
        return this.pracownicyService.getPracownicy();
    }

    @Get('/:id')
    getPracownicyById(
        @Param('id', ParseIntPipe) id : number): Promise<Pracownicy> {
        return this.pracownicyService.getPracownicyById(id);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updatePracownicy(
        @Param('id', ParseIntPipe) id: number,
        @Body() createPracownicyDto: CreatePracownicyDto,
        ): Promise<Pracownicy> {
        return this.pracownicyService.updatePracownicy(id, createPracownicyDto);
    }

    @Delete('/:id')
    deletePracownicy(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.pracownicyService.deletePracownicy(id);
    }
}