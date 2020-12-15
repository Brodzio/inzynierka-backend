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
import { ZdjeciaProduktowModule } from './modules/zdjecia-produktow/zdjecia-produktow.module';
import { FakturyModule } from './modules/faktury/faktury.module';
import { DaneSklepuModule } from './modules/dane-sklepu/dane-sklepu.module';
import { ZamowieniaModule } from './modules/zamowienia/zamowienia.module';
import { ProducenciModule } from './modules/producenci/producenci.module';
import { KategorieModule } from './modules/kategorie/kategorie.module';
import { JednostkiMiaryModule } from './modules/jednostki-miary/jednostki-miary.module';
import { RodzajePlatnosciModule } from './modules/rodzaje-platnosci/rodzaje-platnosci.module';
import { PlatnosciModule } from './modules/platnosci/platnosci.module';
import { StatusyModule } from './modules/statusy/statusy.module';
import { PozycjeZamowieniaModule } from './modules/pozycje-zamowienia/pozycje-zamowienia.module';
import { PozycjeFakturyModule } from './modules/pozycje-faktury/pozycje-faktury.module';
import { PozycjePlatnosciModule } from './modules/pozycje-platnosci/pozycje-platnosci.module';

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
    ZdjeciaProduktowModule,
    FakturyModule,
    DaneSklepuModule,
    ZamowieniaModule,
    ProducenciModule,
    KategorieModule,
    JednostkiMiaryModule,
    RodzajePlatnosciModule,
    PlatnosciModule,
    StatusyModule,
    PozycjeZamowieniaModule,
    PozycjeFakturyModule,
    PozycjePlatnosciModule,
    AuthModule,
  ],
})
export class AppModule {}
