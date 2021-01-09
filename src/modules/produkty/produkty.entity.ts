import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Kategorie } from '../kategorie/kategorie.entity';
import { Producenci } from '../producenci/producenci.entity';
import { JednostkiMiary } from '../jednostki-miary/jednostki-miary.entity';
import { StawkaVat } from '../stawka-vat/stawka-vat.entity';
import { PozycjeZamowienia } from '../pozycje-zamowienia/pozycje-zamowienia.entity';
import { ZdjeciaProduktow } from '../zdjecia-produktow/zdjecia-produktow.entity';
import { Komentarze } from '../komentarze/komentarze.entity';
import { StatusValue } from '../../enum/statusy.enum';

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

    @ManyToOne(type => Producenci, producenci => producenci.produkty, { eager: true, cascade: true })
    producenci: Producenci | number;

    @ManyToOne(type => Kategorie, kategorie => kategorie.produkty, { eager: true, cascade: true  })
    kategorie: Kategorie | number;

    @ManyToOne(type => JednostkiMiary, jednostki_miary => jednostki_miary.produkty, { eager: true, cascade: true  })
    jednostki_miary: JednostkiMiary | number;

    @ManyToOne(type => StawkaVat, stawka_vat => stawka_vat.produkty, { eager: true, cascade: true  })
    stawka_vat: StawkaVat | number;

    @Column({
        type: "enum",
        enum: StatusValue,
        default: StatusValue.ACTIVE
    })
    statusy: StatusValue;

    @OneToMany(type => PozycjeZamowienia, pozycje_zamowienia => pozycje_zamowienia.produkt)
    pozycje_zamowienia: PozycjeZamowienia[];

    @OneToMany(type => ZdjeciaProduktow, zdjecia_produktow => zdjecia_produktow.produkty)
    zdjecia_produktow: ZdjeciaProduktow[];

    @OneToMany(type => Komentarze, komentarze => komentarze.produkty)
    komentarze: Komentarze[];
}