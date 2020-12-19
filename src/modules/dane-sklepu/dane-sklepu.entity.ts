import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Faktury } from '../faktury/faktury.entity';
import { Adresy } from '../adresy/adresy.entity';

@Entity()
export class DaneSklepu extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa: string;

    @Column()
    email: string;

    @Column({
        unique: true
    })
    nip: string;

    @Column()
    nr_tel: string;

    @OneToMany(type => Faktury, faktury => faktury.dane_sklepu, { eager: true })
    faktury: Faktury[];

    @OneToOne(type => Adresy, adresy => adresy.dane_sklepu)
    @JoinColumn()
    adresy: Adresy;
}