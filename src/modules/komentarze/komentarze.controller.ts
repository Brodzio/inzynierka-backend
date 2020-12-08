import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateKomentarzeDTO } from './dto/create-komentarze.dto';
import { Komentarze } from './komentarze.entity';
import { KomentarzeServie } from './komentarze.service';

@Controller('komentarze')
export class KomentarzeController {
    constructor(
        private komentarzeService: KomentarzeServie,
    ) {}

    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() createKomentarzeDTO: CreateKomentarzeDTO,
    ): Promise<Komentarze> {
        return this.komentarzeService.createKomentarze(createKomentarzeDTO);
    }
}