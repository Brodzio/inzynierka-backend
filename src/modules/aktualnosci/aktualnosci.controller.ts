import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AktualnosciService } from "./aktualnosci.service";
import { Aktualnosci } from './aktualnosci.entity';
import { CreateAktualnosciDTO } from "./dto/create-aktualnosci.dto";
import { UpdateAktualnosciDTO } from "./dto/update-aktualnosci.dto";
import { JwtPracownikAuthGuard } from '../../auth/jwt-pracownik-auth.guards';
import { FileInterceptor } from "@nestjs/platform-express";
import { storage } from "src/config/storage.config";

@Controller('news')
export class AktualnosciController {
    constructor(private aktualnosciService: AktualnosciService) {}

    @Post()
    @UseGuards(JwtPracownikAuthGuard)
    @UseInterceptors(
        FileInterceptor(
          "file", // name of the field being passed
          { storage }
        )
      )
    @UsePipes(ValidationPipe)
    createAktualnosci(
        @UploadedFile() file,
        @Body() createAktualnosciDTO: any,
    ): Promise<Aktualnosci> {
        let data: CreateAktualnosciDTO = JSON.parse(createAktualnosciDTO.data);
        data.zdjecie = file.filename;
        console.log(data);
        return this.aktualnosciService.createAktualnosci(data);
    }

    @Get()
    getAktualnosci(): Promise<Aktualnosci[]> {
        return this.aktualnosciService.getAktualnosci();
    }

    @Get('/:id')
    getAktualnosciById(
        @Param('id', ParseIntPipe) id : number): Promise<Aktualnosci> {
        return this.aktualnosciService.getAktualnosciById(id);
    }

    @Put('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    updateAktualnosci(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateAktualnosci: UpdateAktualnosciDTO,
        ): Promise<Aktualnosci> {
        return this.aktualnosciService.updateAktualnosci(id, updateAktualnosci);
    }

    @Delete('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    deleteAktualnosci(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.aktualnosciService.deleteAktualnosci(id);
    }
}