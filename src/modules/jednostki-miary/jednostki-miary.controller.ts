import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { JednostkiMiary } from "./jednostki-miary.entity";
import { JednostkiMiaryService } from "./jednostki-miary.service";
import { CreateJednostkiMiaryDTO } from './dto/create-jednostki-miary.dto';
import { JwtPracownikAuthGuard } from '../../auth/jwt-pracownik-auth.guards';

@Controller('units-measure')
export class JednostkiMiaryController {
    constructor(private jednostkiMiaryService: JednostkiMiaryService) {}

    @Post()
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    createJednostkiMiary(
        @Body() createJednostkiMiaryDTO: CreateJednostkiMiaryDTO,
    ): Promise<JednostkiMiary> {
        return this.jednostkiMiaryService.createJednostkiMiary(createJednostkiMiaryDTO);
    }

    @Get()
    getJednostkiMiary(): Promise<JednostkiMiary[]> {
        return this.jednostkiMiaryService.getJednostkiMiary();
    }

    @Get('/:id')
    getJednostkiMiaryById(
        @Param('id', ParseIntPipe) id : number): Promise<JednostkiMiary> {
        return this.jednostkiMiaryService.getJednostkiMiaryById(id);
    }

    @Put('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    updateJednostkiMiary(
        @Param('id', ParseIntPipe) id: number,
        @Body() createJednostkiMiaryDTO: CreateJednostkiMiaryDTO,
        ): Promise<JednostkiMiary> {
        return this.jednostkiMiaryService.updateJednostkiMiary(id, createJednostkiMiaryDTO);
    }

    @Delete('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    deleteJednostkiMiary(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.jednostkiMiaryService.deleteJednostkiMiary(id);
    }
}