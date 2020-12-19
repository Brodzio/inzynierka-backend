import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PozycjePlatnosci } from '../pozycje-platnosci/pozycje-platnosci.entity';
import { Adresy } from '../adresy/adresy.entity';
import { DaneSklepu } from '../dane-sklepu/dane-sklepu.entity';
import { Klienci } from '../klienci/klienci.entity';
import { PozycjeFaktury } from '../pozycje-faktury/pozycje-faktury.entity';

@Entity()
export class Faktury extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nr_faktury: string;

    @Column()
    data_sprzedazy: string;

    @Column()
    wartosc_netto: string;

    @Column()
    wartosc_brutto: string;

    @Column()
    wartosc_vat: string;

    @Column()
    rodzaj_dokumentu: string;

    @OneToMany(type => PozycjePlatnosci, pozycje_platnosci => pozycje_platnosci.faktury, { eager: true })
    pozycje_platnosci: PozycjePlatnosci[];

    @ManyToOne(type => Adresy, adresy => adresy.faktury, { eager: false })
    adresy: Adresy;

    @ManyToOne(type => DaneSklepu, dane_sklepu => dane_sklepu.faktury, { eager: false }) 
    dane_sklepu: DaneSklepu;

    @ManyToOne(type => Klienci, klienci => klienci.faktury, { eager: false })
    klienci: Klienci;

    @OneToMany(type => PozycjeFaktury, pozycje_faktury => pozycje_faktury.faktury, { eager: true })
    pozycje_faktury: PozycjeFaktury[];
}