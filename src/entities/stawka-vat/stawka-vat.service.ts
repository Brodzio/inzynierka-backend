import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StawkaVat } from './stawka-vat.entity';

@Injectable()
export class StawkaVatService {
  constructor(
    @InjectRepository(StawkaVat)
    private stawkaVatRepository: Repository<StawkaVat>,
  ) {}

  findAll(): Promise<StawkaVat[]> {
    return this.stawkaVatRepository.find();
  }

  findOne(id: string): Promise<StawkaVat> {
    return this.stawkaVatRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.stawkaVatRepository.delete(id);
  }

  async createOne( stawkaVat: StawkaVat) {
    this.stawkaVatRepository.save(stawkaVat);
  }
}