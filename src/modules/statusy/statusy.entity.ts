import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pracownicy } from "../pracownicy/pracownicy.entity";
import { Produkty } from "../produkty/produkty.entity";
import { Zamowienia } from "../zamowienia/zamowienia.entity";
import { Klienci } from '../klienci/klienci.entity';

export enum StatusValue {
    ACTIVE = "aktywny",
    SEND = "wysłany",
}

@Entity()
export class Statusy extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: StatusValue,
    })
    uprawnienia: number;

    @OneToMany(type => Produkty, produkty => produkty.statusy, { eager: true })
    produkty: Produkty[];

    @OneToMany(type => Zamowienia, zamowienia => zamowienia.statusy, { eager: true })
    zamowienia: Zamowienia[];

    @OneToMany(type => Pracownicy, pracownicy => pracownicy.statusy, { eager: true })
    pracownicy: Pracownicy[];

    @OneToMany(type => Klienci, klienci => klienci.statusy, { eager: true })
    klienci: Klienci[];
}