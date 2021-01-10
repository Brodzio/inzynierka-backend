import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { KlienciService } from './../modules/klienci/klienci.service';
import { PracownicyService } from '../modules/pracownicy/pracownicy.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '../modules/pracownicy/pracownicy.entity';

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
            let role;
            console.log(user);
            user.nazwa_firmy ? role = 'klient_firmowy' : role = 'klient_indywidualny';
            payload = { username: user.login, sub: user.id , role: role};
        }
        
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async getUser(user: any): Promise<any>{
        if(user.role == 'klient_indywidualny' || user.role == 'klient_firmowy' ) {
            return await this.klienciService.getKlienciById(user.userId);
        } else if(user.role == UserRole.PRACOWNIK || user.role == UserRole.ADMIN) {
            return await this.pracownicyService.getPracownicyById(user.userId);
        }
    }
}