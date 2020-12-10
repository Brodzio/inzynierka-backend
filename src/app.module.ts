import { StawkaVatModule } from './modules/stawka-vat/stawka-vat.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { KlienciModule } from './modules/klienci/klienci.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ProduktyModule } from './modules/produkty/produkty.module';
import { AuthModule } from './auth/auth.module';
import { PracownicyModule } from './modules/pracownicy/pracownicy.module';
import { KomentarzeModule } from './modules/komentarze/komentarze.module';
import { AktualnosciModule } from './modules/aktualnosci/aktualnosci.module';
import { AdresyModule } from './modules/adresy/adresy.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    StawkaVatModule,
    KlienciModule,
    ProduktyModule,
    PracownicyModule,
    KomentarzeModule,
    AktualnosciModule,
    AdresyModule,
    AuthModule,
  ],
})
export class AppModule {}
