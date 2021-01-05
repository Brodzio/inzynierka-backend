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

    @Column({ unique: true })
    nr_faktury: string;

    @Column()
    data_sprzedazy: Date;

    @Column({
        type: "float"
    })
    wartosc_netto: number;

    @Column({
        type: "float"
    })
    wartosc_brutto: number;

    @Column()
    rodzaj_dokumentu: string;

    @OneToMany(type => PozycjePlatnosci, pozycje_platnosci => pozycje_platnosci.faktury, { cascade: true })
    pozycje_platnosci: PozycjePlatnosci[];

    @ManyToOne(type => Adresy, adresy => adresy.faktury, { eager: true, cascade: true })
    adresy: Adresy | number;

    @ManyToOne(type => DaneSklepu, dane_sklepu => dane_sklepu.faktury, { eager: true, cascade: true }) 
    dane_sklepu: DaneSklepu | number;

    @ManyToOne(type => Klienci, klienci => klienci.faktury, { eager: true , cascade: true })
    klienci: Klienci | number;

    @OneToMany(type => PozycjeFaktury, pozycje_faktury => pozycje_faktury.faktury, {  cascade: true })
    pozycje_faktury: PozycjeFaktury[];
}