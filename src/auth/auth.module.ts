import { AuthController } from './auth.controller';
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { KlienciModule } from "src/modules/klienci/klienci.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";
import { KlienciRepository } from '../modules/klienci/klient.repository';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        KlienciModule,
        PassportModule, 
        JwtModule.register({
            secret: 'topSecret51',
            signOptions: {
                expiresIn: 3600,
            },
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService, 
        LocalStrategy, 
        JwtStrategy],
    exports: [AuthService],
  })
  export class AuthModule {}