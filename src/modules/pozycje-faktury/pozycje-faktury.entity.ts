import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PozycjeZamowienia } from '../pozycje-zamowienia/pozycje-zamowienia.entity';
import { Faktury } from '../faktury/faktury.entity';

@Entity()
export class PozycjeFaktury extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cena_netto_sprzedazy: string;

    @Column()
    cena_brutto_sprzedazy: string;

    @Column()
    procent_vat_sprzedazy: number;

    @Column()
    data_sprzedazy: string;

    @OneToOne(type => PozycjeZamowienia, pozycje_zamowienia => pozycje_zamowienia.pozycje_faktury)
    @JoinColumn()
    pozycje_zamowienia: PozycjeZamowienia;

    @ManyToOne(type => Faktury, faktury => faktury.pozycje_faktury, { eager: false })
    faktury: Faktury;
}