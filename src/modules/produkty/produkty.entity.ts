import { type } from "os";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Kategorie } from '../kategorie/kategorie.entity';
import { Producenci } from '../producenci/producenci.entity';
import { JednostkiMiary } from '../jednostki-miary/jednostki-miary.entity';
import { StawkaVat } from '../stawka-vat/stawka-vat.entity';
import { Statusy } from '../statusy/statusy.entity';
import { PozycjeZamowienia } from '../pozycje-zamowienia/pozycje-zamowienia.entity';
import { ZdjeciaProduktow } from '../zdjecia-produktow/zdjecia-produktow.entity';
import { Komentarze } from '../komentarze/komentarze.entity';

@Entity()
export class Produkty extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa_produktu: string;

    @Column()
    cena_brutto: string;

    @Column()
    cena_netto: string;

    @Column({
        type: "varchar",
        length: 500,
    })
    opis: string;

    @Column()
    ilosc: string;

    @Column({ unique: true })
    kod_produktu: string;

    @ManyToOne(type => Producenci, producenci => producenci.produkty, { eager: false })
    producenci: Producenci;

    @ManyToOne(type => Kategorie, kategorie => kategorie.produkty, { eager: false })
    kategorie: Kategorie;

    @ManyToOne(type => JednostkiMiary, jednostki_miary => jednostki_miary.produkty, { eager: false })
    jednostki_miary: JednostkiMiary;

    @ManyToOne(type => StawkaVat, stawka_vat => stawka_vat.produkty, { eager: false })
    stawka_vat: StawkaVat;

    @ManyToOne(type => Statusy, statusy => statusy.produkty, { eager: false })
    statusy: Statusy;

    @OneToMany(type => PozycjeZamowienia, pozycje_zamowienia => pozycje_zamowienia.produkty, { eager: true })
    pozycje_zamowienia: PozycjeZamowienia[];

    @OneToMany(type => ZdjeciaProduktow, zdjecia_produktow => zdjecia_produktow.produkty, { eager: true })
    zdjecia_produktow: ZdjeciaProduktow[];

    @OneToMany(type => Komentarze, komentarze => komentarze.produkty, { eager: true })
    komentarze: Komentarze[];
}