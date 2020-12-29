import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'topSecret51',
    });
  }

  async validate(payload: any) {
    console.log(payload);
    if(payload.role == 'admin') {
        return { userId: payload.sub, username: payload.username, role: payload.role };
    }
  }
}
