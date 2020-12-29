import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Adresy } from '../adresy/adresy.entity';
import { Klienci } from '../klienci/klienci.entity';
import { PozycjeZamowienia } from '../pozycje-zamowienia/pozycje-zamowienia.entity';
import { StatusValue } from '../../enum/statusy.enum';

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

    @ManyToOne(type => Adresy, adresy => adresy.zamowienia, { eager: false, cascade: true })
    adresy: Adresy | number;

    @ManyToOne(type => Klienci, klienci => klienci.zamowienia, { eager: false, cascade: true })
    klienci: Klienci | number;

    @Column({
        type: "enum",
        enum: StatusValue,
        default: StatusValue.PENDING
    })
    statusy: StatusValue;

    @OneToMany(type => PozycjeZamowienia, pozycje_zamowienia => pozycje_zamowienia.zamowienia, { eager: true })
    pozycje_zamowienia: PozycjeZamowienia[];
}