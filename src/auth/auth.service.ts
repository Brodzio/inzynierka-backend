import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { KlienciService } from './../modules/klienci/klienci.service';
import { PracownicyService } from '../modules/pracownicy/pracownicy.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PracownicyRepository } from '../modules/pracownicy/pracownicy.repository';
import { KlienciRepository } from '../modules/klienci/klient.repository';
import { Klienci } from '../modules/klienci/klienci.entity';

@Injectable()
export class AuthService {

    constructor(
        private klienciService: KlienciService, 
        private pracownicyService: PracownicyService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const credentials: AuthCredentialsDto = { login: username,haslo: password};
        if( await this.klienciService.validateUser(credentials) ) {
            return await this.klienciService.validateUser(credentials);
        } else if ( await this.pracownicyService.validateUser(credentials) ) {
            return await this.pracownicyService.validateUser(credentials);
        }
        return null;
    }

    async login(user: any) {
        let  payload;
        if(user.uprawnienia) {
            payload = { username: user.login, sub: user.id , role: user.uprawnienia};
        } else {
            payload = { username: user.login, sub: user.id , role: 'klient'};
        }
        
        return {
            access_token: this.jwtService.sign(payload),
        };
      }
}