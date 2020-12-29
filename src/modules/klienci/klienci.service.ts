import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KlienciRepository } from './klient.repository';
import { CreateKlientDto } from './dto/create-klient.dto';
import { AuthCredentialsDto } from '../../auth/dto/auth-credentials.dto';
import { Klienci } from './klienci.entity';

@Injectable()
export class KlienciService {

  constructor(
    @InjectRepository(KlienciRepository)
    private klienciRepository: KlienciRepository,
  ) {}

  async signUp(createKlientDto: CreateKlientDto): Promise<void> {
    return this.klienciRepository.signUp(createKlientDto);
  }

  async getKlienci(): Promise<Klienci[]> {
    return this.klienciRepository.getKlienci();
  }

  async getKlienciById(id: number): Promise<Klienci> {
    const found = await this.klienciRepository.findOne({ id });

    if(!found) {
      throw new NotFoundException(`Clients with ID "${id}" not found`);
    }

    return found;
  }

  async updateKlienci(
    id: number,
    createKlientDto: CreateKlientDto,
  ): Promise<Klienci> {
    const { imie, nazwisko, nazwa_firmy, regon, nip, nr_tel, email, adresy } = createKlientDto;
    const klient = await this.getKlienciById(id);

    klient.imie = imie;
    klient.nazwisko = nazwisko;
    klient.nazwa_firmy = nazwa_firmy;
    klient.regon = regon;
    klient.nip = nip;
    klient.nr_tel = nr_tel;
    klient.email = email;
    klient.adresy = adresy;

    await klient.save();
    return klient;
  }

  async deleteKlienci(
    id: number,
  ): Promise<void> {
    const result = await this.klienciRepository.delete({ id });
    
    if(result.affected === 0) {
      throw new NotFoundException(`Clients with ID "${id}" not found`);
    }
  }

  async validateUser(authCredentialsDto: AuthCredentialsDto): Promise<Klienci> {
    return await this.klienciRepository.validateUserPassword(authCredentialsDto);
  }
}