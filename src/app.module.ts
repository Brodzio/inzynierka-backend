import { StawkaVatModule } from './modules/stawka-vat/stawka-vat.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { KlienciModule } from './modules/klienci/klienci.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ProduktyModule } from './modules/produkty/produkty.module';
import { AuthModule } from './auth/auth.module';
import { PracownikModule } from './modules/pracownicy/pracownik.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    StawkaVatModule,
    KlienciModule,
    ProduktyModule,
    PracownikModule,
    AuthModule,
  ],
})
export class AppModule {}
