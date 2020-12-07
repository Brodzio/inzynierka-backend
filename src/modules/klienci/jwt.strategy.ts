import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayLoad } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { KlienciRepository } from './klient.repository';
import { Klienci } from './klienci.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(KlienciRepository)
    private klienciRepository: KlienciRepository,
  ) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'topSecret51',
    });
  }

  async validate(payload: JwtPayLoad): Promise<Klienci> {
    const { login } = payload;
    const user = await this.klienciRepository.findOne({ login });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
