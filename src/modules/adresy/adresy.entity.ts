import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Faktury } from "../faktury/faktury.entity";
import { DaneSklepu } from '../dane-sklepu/dane-sklepu.entity';
import { Zamowienia } from '../zamowienia/zamowienia.entity';
import { Pracownicy } from '../pracownicy/pracownicy.entity';
import { Klienci } from '../klienci/klienci.entity';

@Entity()
export class Adresy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    wojewodztwo: string;

    @Column()
    miejscowosc: string

    @Column()
    ulica: string;

    @Column()
    nr_budynku: string;

    @Column()
    nr_lokalu: string;

    @Column()
    kod_pocztowy: string;

    @OneToMany(type => Faktury, faktury => faktury.adresy, { eager: true })
    faktury: Faktury[];

    @OneToOne(type => DaneSklepu, dane_sklepu => dane_sklepu.adresy)
    dane_sklepu: DaneSklepu;

    @OneToMany(type => Zamowienia, zamowienia => zamowienia.adresy, { eager: true })
    zamowienia: Zamowienia[];

    @OneToOne(type => Pracownicy, pracownicy => pracownicy.adresy)
    pracownicy: Pracownicy;

    @OneToOne(type => Klienci, klienci => klienci.adresy)
    klienci: Klienci;
}