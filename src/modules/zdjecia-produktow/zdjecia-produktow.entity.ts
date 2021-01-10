import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produkty } from '../produkty/produkty.entity';

@Entity()
export class ZdjeciaProduktow extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa: string;

    @Column()
    data_dodania: string;

    @ManyToOne(type => Produkty, produkty => produkty.zdjecia_produktow, { cascade: true })
    produkty: Produkty | number;
}