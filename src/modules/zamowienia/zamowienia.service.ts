import { KlienciService } from './../klienci/klienci.service';
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ZamowieniaRepository } from "./zamowienia.repository";
import { CreateZamowieniDTO } from './dto/create-zamowienia.dto';
import { Zamowienia } from './zamowienia.entity';
import { Klienci } from '../klienci/klienci.entity';
import { ProduktyService } from '../produkty/produkty.service';
import { PozycjeZamowienia } from '../pozycje-zamowienia/pozycje-zamowienia.entity';
import { StatusValue } from 'src/enum/statusy.enum';
import { FakturyService } from '../faktury/faktury.service';
import { CreateFakturyDto } from '../faktury/dto/create-faktury.dto';
import { Faktury } from '../faktury/faktury.entity';
import { PlatnosciService } from '../platnosci/platnosci.service';

@Injectable()
export class ZamowieniaService {
    constructor(
        @InjectRepository(ZamowieniaRepository)
        private zamowieniaRepository: ZamowieniaRepository,
        private klienciService: KlienciService,
        private produktyService: ProduktyService,
        private fakturyService: FakturyService,
        private platnosciService: PlatnosciService
    ) {}

    async createZamowienia( createZamowieniaDTO: CreateZamowieniDTO, user ): Promise<Zamowienia> {
        const id = user.userId;
        const klient: Klienci = await this.klienciService.getKlienciById( id );
        let pozycjeZamowienia: PozycjeZamowienia[] = new Array<PozycjeZamowienia>();
        for( let i=0; i<createZamowieniaDTO.produkty.length; i++){
            let produkt = await this.produktyService.getProduktyById(createZamowieniaDTO.produkty[i].id);
            let pozycjaZamowienia: PozycjeZamowienia = {} as PozycjeZamowienia;
            pozycjaZamowienia.ilosc = createZamowieniaDTO.produkty[i].ilosc;
            pozycjaZamowienia.produkt = produkt;
            pozycjaZamowienia.cena_netto = (pozycjaZamowienia.ilosc * Number.parseFloat(produkt.cena_netto)).toFixed(2);
            pozycjaZamowienia.cena_brutto = (pozycjaZamowienia.ilosc * Number.parseFloat(produkt.cena_brutto)).toFixed(2);
            pozycjeZamowienia.push(pozycjaZamowienia);
        }
        console.log(createZamowieniaDTO.produkty);
        return this.zamowieniaRepository.createZamowienia( klient, pozycjeZamowienia, createZamowieniaDTO);
    }

    async getZamowienia(): Promise<Zamowienia[]> {
        return this.zamowieniaRepository.find();
    }

    async getZamowieniaById(id: number): Promise<Zamowienia> {
        const found = await this.zamowieniaRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Order with ID "${id}" not found`);
        }

        return found;
    }

    async updateZamowienia(
        id: number,
        // createZamowieniaDTO: CreateZamowieniDTO
    ): Promise<Zamowienia> {
        const zamowienie = await this.getZamowieniaById(id);
        zamowienie.data_zlozenia = new Date();
        zamowienie.data_przyjecia = null;
        zamowienie.data_wysylki = null;
        zamowienie.data_realizacji = null;
        await zamowienie.save();
        return zamowienie;
    }

    async updateZamowieniaStatus(
        id: number,
        createFakturyDto: CreateFakturyDto
    ): Promise<any> {
        const zamowienia = await this.getZamowieniaById(id);
        let faktura: Faktury;
        
        switch(zamowienia.statusy) {
            case StatusValue.PENDING:        
                zamowienia.data_przyjecia = new Date();
                zamowienia.statusy = StatusValue.ACCEPTED;
                zamowienia.save();
                faktura = await this.fakturyService.createFaktury(createFakturyDto, zamowienia);
                await this.platnosciService.createPlatnosci(createFakturyDto, faktura);
                break;
            case StatusValue.ACCEPTED:
                zamowienia.data_wysylki = new Date();
                zamowienia.statusy = StatusValue.SEND;
                zamowienia.save();
                break;
            case StatusValue.SEND:
                zamowienia.data_realizacji = new Date();
                zamowienia.statusy = StatusValue.EXECUTED;
                zamowienia.save();
            default:
                break;
        }
    }

    async deleteZamowienia(
        id: number,
    ): Promise<void> {
        const result = await this.zamowieniaRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Order with ID "${id}" not found`);
        }
    }
}