import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produkty } from '../produkty/produkty.entity';

@Entity()
export class JednostkiMiary extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa: string;

    @OneToMany(type => Produkty, produkty => produkty.jednostki_miary)
    produkty: Produkty[];
}