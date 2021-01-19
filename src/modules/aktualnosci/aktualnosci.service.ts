import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AktualnosciRepository } from "./aktualnosci.repository";
import { CreateAktualnosciDTO } from "./dto/create-aktualnosci.dto";
import { Aktualnosci } from './aktualnosci.entity';
import { UpdateAktualnosciDTO } from "./dto/update-aktualnosci.dto";
import { readFile } from "fs";

@Injectable()
export class AktualnosciService {
    constructor(
        @InjectRepository(AktualnosciRepository)
        private aktualnosciRepository: AktualnosciRepository,
    ) {}

    async createAktualnosci(createAktualnosciDTO: CreateAktualnosciDTO): Promise<Aktualnosci> {
        return this.aktualnosciRepository.createAktualnosci(createAktualnosciDTO);
    }

    async getAktualnosci(): Promise<{aktualnosc:Aktualnosci, zdjecie:any}[]> {
        let returnData: {aktualnosc:Aktualnosci, zdjecie:any}[] = new Array<{aktualnosc:Aktualnosci, zdjecie:any}>();
        let promise: Promise<{aktualnosc:Aktualnosci, zdjecie:any}[]> = new Promise<{aktualnosc:Aktualnosci, zdjecie:any}[]>((resolve, reject)=>{
            resolve(returnData);
           });
        let found: Aktualnosci[] = new Array(); 
        await this.aktualnosciRepository.find().then( found1=>{
            found = found1;
        });
        for(let i=0;i<found.length;i++){
            let result = await new Promise<String>((resolve, reject)=>{
                readFile('./uploads/'+found[i].zdjecie,{},(err,data)=>{
                resolve(data.toString('base64'));
               });
            });
            returnData.push({aktualnosc: found[i],zdjecie: result});
        }
        return promise;
    }

    async getAktualnosciById(id: number): Promise<Aktualnosci> {
        const found = await this.aktualnosciRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`News with ID "${id}" not found`);
        }

        return found;
    }

    async updateAktualnosci(
        id: number,
        updateAktualnosci: UpdateAktualnosciDTO,
    ): Promise<Aktualnosci> {
        const { tytul, opis, zdjecie } = updateAktualnosci;
        const aktualnosc = await this.getAktualnosciById(id);
        aktualnosc.tytul = tytul;
        aktualnosc.opis = opis;
        aktualnosc.zdjecie = zdjecie;
        await aktualnosc.save();
        return aktualnosc;
    }

    async deleteAktualnosci(
        id: number,
    ): Promise<void> {
        const result = await this.aktualnosciRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`News with ID "${id}" not found`);
        }
    }
}