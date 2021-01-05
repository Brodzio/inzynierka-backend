import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produkty } from '../produkty/produkty.entity';

@Entity()
export class Producenci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa_producenta: string;

    @OneToMany(type => Produkty, produkty => produkty.producenci)
    produkty: Produkty[];
}