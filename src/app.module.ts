import { StawkaVatModule } from './entities/stawka-vat/stawka-vat.module';
import { StawkaVat } from './entities/stawka-vat/stawka-vat.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KlienciModule } from './entities/klienci/klienci.module';
import { Klienci } from './entities/klienci/klienci.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '0000',
      database: 'mydb',
      entities: [StawkaVat, Klienci],
      synchronize: true,
    }),
    StawkaVatModule,
    KlienciModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
