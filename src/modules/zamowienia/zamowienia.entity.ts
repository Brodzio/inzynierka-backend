import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Adresy } from '../adresy/adresy.entity';
import { Klienci } from '../klienci/klienci.entity';
import { Statusy } from '../statusy/statusy.entity';
import { PozycjeZamowienia } from '../pozycje-zamowienia/pozycje-zamowienia.entity';

@Entity()
export class Zamowienia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_zlozenia: string;

    @Column()
    data_przyjecia: string;

    @Column()
    data_wysylki: string;

    @Column()
    data_realizacji: string;

    @ManyToOne(type => Adresy, adresy => adresy.zamowienia, { eager: false})
    adresy: Adresy;

    @ManyToOne(type => Klienci, klienci => klienci.zamowienia, { eager: false })
    klienci: Klienci;

    @ManyToOne(type => Statusy, statusy => statusy.zamowienia, { eager: false })
    statusy: Statusy;

    @OneToMany(type => PozycjeZamowienia, pozycje_zamowienia => pozycje_zamowienia.zamowienia, { eager: true })
    pozycje_zamowienia: PozycjeZamowienia[];
}