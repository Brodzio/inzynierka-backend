import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { PozycjePlatnosci } from '../pozycje-platnosci/pozycje-platnosci.entity';
import { RodzajePlatnosci } from '../rodzaje-platnosci/rodzaje-platnosci.entity';

@Entity()
export class Platnosci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_platnosci: string;

    @ManyToOne(type => RodzajePlatnosci, rodzaje_platnosci => rodzaje_platnosci.platnosci, { eager: false })
    rodzaje_platnosci: RodzajePlatnosci;

    @OneToMany(type => PozycjePlatnosci, pozycje_platnosci => pozycje_platnosci.platnosci, { eager: true })
    pozycje_platnosci: PozycjePlatnosci[];
}