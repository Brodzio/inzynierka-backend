import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateKomentarzeDTO } from './dto/create-komentarze.dto';
import { Komentarze } from './komentarze.entity';
import { KomentarzeServie } from './komentarze.service';
import { UpdateKomentarzeDTO } from './dto/update-komentarze.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guards';

@Controller('comments')
export class KomentarzeController {
    constructor(
        private komentarzeService: KomentarzeServie,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    createKomentarze(
        @Body() createKomentarzeDTO: CreateKomentarzeDTO,
    ): Promise<Komentarze> {
        return this.komentarzeService.createKomentarze(createKomentarzeDTO);
    }

    @Get()
    getKomentarze(): Promise<Komentarze[]> {
        return this.komentarzeService.getKomentarze();
    }

    @Get('/product/:id')
    getCommentsByProductId(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Komentarze[]> {
        return this.komentarzeService.getCommentsByProductId(id);
    }

    @Get('/news/:id')
    getCommentsByNewsId(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Komentarze[]> {
        return this.komentarzeService.getCommentsByNewsId(id);
    }

    @Get('/:id')
    getCommentsById(
        @Param('id', ParseIntPipe) id : number): Promise<Komentarze> {
        return this.komentarzeService.getCommentsById(id);
    }

    @Put('/:id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    updateKomentarze(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateKomentarz: UpdateKomentarzeDTO,
        ): Promise<Komentarze> {
        return this.komentarzeService.updateKomentarze(id, updateKomentarz);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    deleteTask(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.komentarzeService.deleteKomentarze(id);
    }
}