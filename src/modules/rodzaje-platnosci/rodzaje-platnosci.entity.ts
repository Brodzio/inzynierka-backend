import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Platnosci } from '../platnosci/platnosci.entity';

@Entity()
export class RodzajePlatnosci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa_platnosci: string;

    @OneToMany(type => Platnosci, platnosci => platnosci.rodzaje_platnosci, { eager: true })
    platnosci: Platnosci[];
}