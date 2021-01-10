import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { ZdjeciaProduktowService } from "./zdjecia-produktow.service";
import { ZdjeciaProduktow } from './zdjecia-produktow.entity';
import { CreateZdjeciaProduktowDTO } from "./dto/create-zdjecia-produktow.dto";
import { JwtPracownikAuthGuard } from '../../auth/jwt-pracownik-auth.guards';
import { FileInterceptor } from "@nestjs/platform-express";
import { storage } from "src/config/storage.config";
import { ReadStream } from "typeorm/platform/PlatformTools";

@Controller('product-photos')
export class ZdjeciaProduktowController {
    constructor(private zdjeciaProduktowService: ZdjeciaProduktowService) {}

    @Post('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    @UseInterceptors(
        FileInterceptor(
          "file", // name of the field being passed
          { storage }
        )
      )
    createZdjeciaProduktow(
        @UploadedFile() file,
        @Param('id', ParseIntPipe) id : number
    ): Promise<ZdjeciaProduktow> {
        const data: CreateZdjeciaProduktowDTO ={
            data_dodania: new Date().toDateString(),
            nazwa: file.filename,
            produkty: id,
        }
        console.log(file);
        return this.zdjeciaProduktowService.createZdjeciaProduktow(data);
    }

    @Get()
    getZdjeciaProduktow(): Promise<ZdjeciaProduktow[]> {
        return this.zdjeciaProduktowService.getZdjeciaProduktow();
    }

    @Get('/:id')
    getZdjeciaProduktowById(
        @Param('id', ParseIntPipe) id : number): Promise<any> {
        return this.zdjeciaProduktowService.getZdjeciaProduktowById(id);
    }

    @Put('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    @UsePipes(ValidationPipe)
    updateZdjeciaProduktow(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO,
        ): Promise<ZdjeciaProduktow> {
        return this.zdjeciaProduktowService.updateZdjeciaProduktow(id, updateZdjeciaProduktowDTO);
    }

    @Delete('/:id')
    @UseGuards(JwtPracownikAuthGuard)
    deleteZdjeciaProduktow(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.zdjeciaProduktowService.deleteZdjeciaProduktow(id);
    }
}