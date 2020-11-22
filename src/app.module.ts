import { StawkaVatModule } from './DTOObjects/stawka-vat/stawka-vat.module';
import { StawkaVat } from './DTOObjects/stawka-vat/stawka-vat.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KlienciModule } from './DTOObjects/klienci/klienci.module';
import { Klienci } from './DTOObjects/klienci/klienci.entity';
import { AuthModule } from './auth/auth.module';
import { Pracownik } from './DTOObjects/pracownik/pracownik.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '0000',
      database: 'mydb',
      entities: [StawkaVat, Klienci, Pracownik],
      synchronize: true,
    }),
    StawkaVatModule,
    KlienciModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
