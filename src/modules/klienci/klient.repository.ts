import { EntityRepository, Repository } from 'typeorm';
import { Klienci } from './klienci.entity';
import * as bcrypt from 'bcrypt';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { CreateKlientDto } from './dto/create-klient.dto';
import { AuthCredentialsDto } from '../../auth/dto/auth-credentials.dto';

@EntityRepository(Klienci)
export class KlienciRepository extends Repository<Klienci> {
    
    async signUp(createKlientDto: CreateKlientDto): Promise<void> {
        const { imie, nazwisko, login, haslo, nazwa_firmy, regon, nip, nr_tel, email, adresy } = createKlientDto;

        const klient = new Klienci();

        klient.imie = imie;
        klient.nazwisko = nazwisko;
        klient.login = login;
        klient.sol = await bcrypt.genSalt();
        klient.haslo = await this.hashPassword(haslo, klient.sol);
        if(nazwa_firmy) {
            klient.nazwa_firmy = nazwa_firmy;
        } else {
            klient.nazwa_firmy = 'null';
        }
        if(regon) {
            klient.regon = regon;
        } else {
            klient.regon = 'null';
        }
        if(nip) {
            klient.nip = nip;
        } else {
            klient.nip = 'null';
        }
        klient.nr_tel = nr_tel;
        klient.email = email;
        klient.adresy = adresy;

        try {
            await klient.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async getKlienci(): Promise<Klienci[]> {
        const query = this.createQueryBuilder('klienci');

        const klienci = await query.getMany();

        return klienci;
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<Klienci> {
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