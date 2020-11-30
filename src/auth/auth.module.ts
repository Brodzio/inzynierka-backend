import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PracownikModule } from 'src/DTOObjects/pracownik/pracownik.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './contants';

@Module({
  imports: [PracownikModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
