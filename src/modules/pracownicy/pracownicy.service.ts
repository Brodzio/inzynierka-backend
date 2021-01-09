import { Injectable, NotFoundException, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracownicyRepository } from './pracownicy.repository';
import { CreatePracownicyDto } from './dto/create-pracownicy.dto';
import { Pracownicy } from './pracownicy.entity';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';

@Injectable()
export class PracownicyService implements OnApplicationBootstrap{
    constructor(
        @InjectRepository(PracownicyRepository)
        private pracownicyRepository: PracownicyRepository,
    ) {}

    onApplicationBootstrap(){
        this.getPracownicy().then( result => { 
            if(result.length == 0) {
                this.pracownicyRepository.createAdmin();
            }
        });
    }

    async createPracownicy(
        createPracownicyDto: CreatePracownicyDto,
    ): Promise<Pracownicy> {
        return this.pracownicyRepository.createPracownicy(createPracownicyDto);
    }

    async getPracownicy(): Promise<Pracownicy[]> {
        return this.pracownicyRepository.find();
    }

    async getPracownicyById(id: number): Promise<Pracownicy> {
        const found = await this.pracownicyRepository.findOne({ id });

        if(!found) {
            throw new NotFoundException(`Worker with ID "${id}" not found`);
        }

        return found;
    }

    async updatePracownicy(
        id: number,
        createPracownicyDto: CreatePracownicyDto,
    ): Promise<Pracownicy> {
        const { imie, nazwisko, nr_tel, email, data_zatrudnienia, data_zwolnienia, adresy } = createPracownicyDto;

        const pracownik = await this.getPracownicyById(id);

        pracownik.imie = imie;
        pracownik.nazwisko = nazwisko;
        pracownik.nr_tel = nr_tel;
        pracownik.email = email;
        pracownik.data_zatrudnienia = data_zatrudnienia;
        pracownik.data_zwolnienia = data_zwolnienia;
        pracownik.adresy = adresy;

        await pracownik.save();
        return pracownik;
    }

    async deletePracownicy(
        id: number,
    ): Promise<void> {
        const result = await this.pracownicyRepository.delete({ id });
        
        if(result.affected === 0) {
            throw new NotFoundException(`Worker with ID "${id}" not found`);
        }
    }

    async validateUser(authCredentialsDto: AuthCredentialsDto): Promise<Pracownicy> {
        return await this.pracownicyRepository.validateUserPassword(authCredentialsDto);
    }
}