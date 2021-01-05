import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtPracownikStrategy extends PassportStrategy(Strategy, 'jwt-pracownik') {
  constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'topSecret51',
    });
  }

  async validate(payload: any) {
    if(payload.role == 'pracownik') {
        return { userId: payload.sub, username: payload.username, role: payload.role };
    }
  }
}
