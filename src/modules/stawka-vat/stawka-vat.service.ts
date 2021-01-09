import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StawkaVat } from './stawka-vat.entity';
import { CreateStawkaVatDto } from './dto/create-stawka-vat.dto';
import { StawkaVatRepository } from './stawka-vat.repository';

@Injectable()
export class StawkaVatService {
  constructor(
    @InjectRepository(StawkaVat)
    private stawkaVatRepository: StawkaVatRepository,
  ) {}

  async createStawkaVat(createStawkaVatDto: CreateStawkaVatDto): Promise<StawkaVat> {
    return this.stawkaVatRepository.createStawkaVat(createStawkaVatDto);
  }

  async getStawkaVat(): Promise<StawkaVat[]> {
    return this.stawkaVatRepository.find();
  }

  async getStawkaVatById(id: number): Promise<StawkaVat> {
    const found = await this.stawkaVatRepository.findOne({ id });

    if (!found) {
        throw new NotFoundException(`Vat with ID "${id}" not found`);
    }

    return found;
  } 

  async deleteStawkaVat(id: number): Promise<void> {
    const result = await this.stawkaVatRepository.delete({ id });
        
    if(result.affected === 0) {
        throw new NotFoundException(`Vat with ID "${id}" not found`);
    }
  }

  async updateStawkaVat(
    id: number,
    updateStawkaVat: CreateStawkaVatDto,
  ): Promise<StawkaVat> {
    const { stawka_vat, stawka_proc } = updateStawkaVat;
    const vat = await this.getStawkaVatById(id);
    vat.stawka_vat = stawka_vat;
    vat.stawka_proc = stawka_proc;
    await vat.save();
    return vat;
  }
}