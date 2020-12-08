import { PracownicyService } from '../modules/pracownicy/pracownicy.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PracownicyRepository } from '../modules/pracownicy/pracownicy.repository';
import { KlienciRepository } from '../modules/klienci/klient.repository';

@Injectable()
export class AuthService {

    constructor(
        private klienciRepository: KlienciRepository, 
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.klienciRepository.findOne({where: {'login':username}});
        if  (user.login == username && user.haslo == password) {
            const { haslo, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}