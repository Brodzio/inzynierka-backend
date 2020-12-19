import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produkty } from '../produkty/produkty.entity';

@Entity()
export class Kategorie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa_kategorii: string;

    @OneToMany(type => Produkty, produkty => produkty.kategorie, { eager: true })
    produkty: Produkty[];
}