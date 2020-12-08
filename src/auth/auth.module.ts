import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { KlienciModule } from "src/modules/klienci/klienci.module";
import { PracownikModule } from "src/modules/pracownicy/pracownik.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";
import { KlienciRepository } from '../modules/klienci/klient.repository';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([KlienciRepository]), 
        PassportModule, 
        JwtModule.register({
            secret: 'topSecret51',
            signOptions: {
                expiresIn: 3600,
            },
        }),
    ],
    providers: [
        AuthService, 
        LocalStrategy, 
        JwtStrategy],
    exports: [AuthService],
  })
  export class AuthModule {}