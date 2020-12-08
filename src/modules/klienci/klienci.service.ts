import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KlienciRepository } from './klient.repository';
import { CreateKlientDto } from './dto/create-klient.dto';
import { JwtService } from '@nestjs/jwt';

import { AuthCredentialsDto } from '../../auth/dto/auth-credentials.dto';

@Injectable()
export class KlienciService {

  constructor(
    @InjectRepository(KlienciRepository)
    private klienciRepository: KlienciRepository,
  ) {}

  async signUp(createKlientDto: CreateKlientDto): Promise<void> {
    return this.klienciRepository.signUp(createKlientDto);
  }

  // async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
  //   const login = await this.klienciRepository.validateUserPassword(authCredentialsDto);

  //   if(!login) {
  //     throw new UnauthorizedException('Invalid credentials!');
  //   }

  //   const payload: JwtPayLoad = { login };
  //   const accessToken = await this.jwtService.sign(payload);

  //   return { accessToken };
  // }
}