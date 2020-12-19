import { Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Adresy } from '../adresy/adresy.entity';
import { RodzajPracownika } from '../rodzaj-pracownika/rodzaj.pracownika.entity';
import { Statusy } from '../statusy/statusy.entity';

@Entity()
@Unique(['login'])
export class Pracownicy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imie: string;

    @Column()
    nazwisko: string;

    @Column()
    login: string;

    @Column()
    haslo: string;

    @Column()
    nr_tel: string;

    @Column()
    email: string;

    @Column()
    data_zatrudnienia: string;

    @Column()
    data_zwolnienia: string;

    @Column()
    sol: string;

    async validatePassword(haslo: string): Promise<boolean> {
        const hash = await bcrypt.hash(haslo, this.sol);
        return hash === this.haslo;
    }

    @OneToOne(type => Adresy, adresy => adresy.klienci)
    @JoinColumn()
    adresy: Adresy;

    @OneToOne(type => RodzajPracownika, rodzaj_pracownika => rodzaj_pracownika.pracownicy)
    @JoinColumn()
    rodzaj_pracownika: RodzajPracownika;

    @ManyToOne(type => Statusy, statusy => statusy.pracownicy, { eager: false })
    statusy: Statusy;
}
