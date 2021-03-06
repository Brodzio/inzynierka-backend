import { Pracownik } from './pracownik.entity';
import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PracownikService {

  constructor(
    @InjectRepository(Pracownik)
    private pracownikRepository: Repository<Pracownik>,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  findAll(): Promise<Pracownik[]> {
    return this.pracownikRepository.find();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  findOne(username: string): Promise<Pracownik> {
    return this.pracownikRepository.findOne({where: {'login':username}});
  }

  async remove(id: string): Promise<void> {
    await this.pracownikRepository.delete(id);
  }

  async createOne( klienci: Pracownik) {
    this.pracownikRepository.save(klienci);
  }
}