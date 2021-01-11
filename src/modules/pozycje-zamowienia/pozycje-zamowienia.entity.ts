import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Zamowienia } from '../zamowienia/zamowienia.entity';
import { Produkty } from '../produkty/produkty.entity';
import { PozycjeFaktury } from '../pozycje-faktury/pozycje-faktury.entity';

@Entity()
export class PozycjeZamowienia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ilosc: number;

    @Column()
    cena_brutto: string;

    @Column()
    cena_netto: string;

    @ManyToOne(type => Zamowienia, zamowienia => zamowienia.pozycje_zamowienia)
    zamowienia: Zamowienia;

    @ManyToOne(type => Produkty, produkty => produkty.pozycje_zamowienia, { eager: true })
    produkt: Produkty;

    @OneToOne(type => PozycjeFaktury, pozycje_faktury => pozycje_faktury.pozycje_zamowienia)
    pozycje_faktury: PozycjeFaktury;
}