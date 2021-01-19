import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateZdjeciaProduktowDTO } from "./dto/create-zdjecia-produktow.dto";
import { ZdjeciaProduktowRepository } from "./zdjecia-produktow.repository";
import { ZdjeciaProduktow } from './zdjecia-produktow.entity';
import { createReadStream, readFile, ReadStream } from "fs";

@Injectable()
export class ZdjeciaProduktowService {
    constructor(
        @InjectRepository(ZdjeciaProduktowRepository)
        private zdjeciaProduktowRepository: ZdjeciaProduktowRepository,
    ) {}

    async createZdjeciaProduktow(createZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO): Promise<ZdjeciaProduktow> {
        return this.zdjeciaProduktowRepository.createZdjeciaProduktow(createZdjeciaProduktowDTO);
    }

    async getZdjeciaProduktow(): Promise<ZdjeciaProduktow[]> {
        return this.zdjeciaProduktowRepository.find();
    }

    async getZdjeciaProduktowById(id: number): Promise<any> {
        const found = await this.zdjeciaProduktowRepository.findOne({ id });
        if(!found) {
            throw new NotFoundException(`Photo with ID "${id}" not found`);
        }
        let result = await new Promise<String>((resolve, reject)=>{
            readFile('./uploads/'+found.nazwa,{},(err,data)=>{
            resolve(data.toString('base64'));
           });
        });
        return {data:result};
    }

    async updateZdjeciaProduktow(
        id: number,
        createZdjeciaProduktowDTO: CreateZdjeciaProduktowDTO,
    ): Promise<ZdjeciaProduktow> {
        const { nazwa, data_dodania } = createZdjeciaProduktowDTO;
        const photo = await this.zdjeciaProduktowRepository.findOne(id);
        photo.nazwa = nazwa;
        photo.data_dodania = data_dodania;
        await photo.save();
        return photo;
    }

    async deleteZdjeciaProduktow(
        id: number,
    ): Promise<void> {
        const result = await this.zdjeciaProduktowRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Photo with ID "${id}" not found`);
        }
    }
}