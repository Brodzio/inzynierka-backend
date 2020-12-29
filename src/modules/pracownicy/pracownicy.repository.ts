import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePracownicyDto } from './dto/create-pracownicy.dto';
import { Pracownicy } from './pracownicy.entity';
import * as bcrypt from 'bcrypt';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Pracownicy)
export class PracownicyRepository extends Repository<Pracownicy> {

    async createPracownicy(
        createPracownicyDto: CreatePracownicyDto,
    ): Promise<Pracownicy> {
        console.log(createPracownicyDto);
        const { imie, nazwisko, login, haslo, nr_tel, email, data_zatrudnienia, adresy } = createPracownicyDto;

        const pracownik = new Pracownicy();
        pracownik.imie = imie;
        pracownik.nazwisko = nazwisko;
        pracownik.login = login;
        pracownik.sol = await bcrypt.genSalt();
        pracownik.haslo = await this.hashPassword(haslo, pracownik.sol);
        pracownik.nr_tel = nr_tel;
        pracownik.email = email;
        pracownik.data_zatrudnienia = data_zatrudnienia;
        pracownik.data_zwolnienia = "null";
        pracownik.adresy = adresy;

        try {
            await pracownik.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
        return pracownik;
    }

    async getPracownicy(): Promise<Pracownicy[]> {
        const query = this.createQueryBuilder('pracownicy');

        const worker = await query.getMany();

        return worker;
    }
    
    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<Pracownicy> {
        const { login, haslo } = authCredentialsDto;
        const user = await this.findOne({ login });

        if (user && await user.validatePassword(haslo)) {
            return user;
        } else {
            return null;
        }
    }

    private async hashPassword(password: string, salt: string) {
        return bcrypt.hash(password, salt); 
    }
}