import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Adresy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    wojewodztwo: string;

    @Column()
    miejscowosc: string

    @Column()
    ulica: string;

    @Column()
    nr_budynku: string;

    @Column()
    nr_lokalu: string;

    @Column()
    kod_pocztowy: string;
}