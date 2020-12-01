import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Klienci } from './klienci.entity';

@Injectable()
export class KlienciService {

  constructor(
    @InjectRepository(Klienci)
    private klienciRepository: Repository<Klienci>,
  ) {}

  findAll(): Promise<Klienci[]> {
    return this.klienciRepository.find();
  }

  findOne(id: string): Promise<Klienci> {
    return this.klienciRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.klienciRepository.delete(id);
  }

  async createOne( klienci: Klienci) {
    this.klienciRepository.save(klienci);
  }
}