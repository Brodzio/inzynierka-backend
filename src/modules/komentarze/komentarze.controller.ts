import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateKomentarzeDTO } from './dto/create-komentarze.dto';
import { Komentarze } from './komentarze.entity';
import { KomentarzeServie } from './komentarze.service';
import { UpdateKomentarzeDTO } from './dto/update-komentarze.dto';

@Controller('comments')
export class KomentarzeController {
    constructor(
        private komentarzeService: KomentarzeServie,
    ) {}

    @Post()
    @UsePipes(ValidationPipe)
    createKomentarze(
        @Body() createKomentarzeDTO: CreateKomentarzeDTO,
    ): Promise<Komentarze> {
        return this.komentarzeService.createKomentarze(createKomentarzeDTO);
    }

    @Get()
    getTasks(): Promise<Komentarze[]> {
        return this.komentarzeService.getKomentarze();
    }

    @Get('/:id')
    getCommentsById(
        @Param('id', ParseIntPipe) id : number): Promise<Komentarze> {
        return this.komentarzeService.getCommentsById(id);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateKomentarze(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateKomentarz: UpdateKomentarzeDTO,
        ): Promise<Komentarze> {
        return this.komentarzeService.updateKomentarze(id, updateKomentarz);
    }

    @Delete('/:id')
    deleteTask(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.komentarzeService.deleteKomentarze(id);
    }
}