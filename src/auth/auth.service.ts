import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { KlienciService } from './../modules/klienci/klienci.service';
import { PracownicyService } from '../modules/pracownicy/pracownicy.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PracownicyRepository } from '../modules/pracownicy/pracownicy.repository';
import { KlienciRepository } from '../modules/klienci/klient.repository';

@Injectable()
export class AuthService {

    constructor(
        private klienciService: KlienciService, 
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const creditionals: AuthCredentialsDto = { login: username,haslo: password};
        if(this.klienciService.validateUser(creditionals)){
            return true
        } else if(true){

        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        let role = 0;
        //role = clientService.isClient()
        //pracownikService.isPracownik()
        //pracownikService.isAdmin()
        return {
            role: role,
          access_token: this.jwtService.sign(payload),
        };
      }
}