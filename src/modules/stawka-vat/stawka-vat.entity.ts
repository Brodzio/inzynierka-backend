import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Produkty } from '../produkty/produkty.entity';

@Entity()
export class StawkaVat extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stawka_vat: string;

    @Column()
    czy_aktywne: boolean;

    @Column()
    stawka_proc: number;

    @OneToMany(type => Produkty, produkty => produkty.stawka_vat)
    produkty: Produkty[];
}
