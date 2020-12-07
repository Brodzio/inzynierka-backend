import { PracownikService } from '../modules/pracownik/pracownik.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private pracownikService: PracownikService, private jwtService: JwtService){

    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.pracownikService.findOne(username);
        console.log(user);
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
