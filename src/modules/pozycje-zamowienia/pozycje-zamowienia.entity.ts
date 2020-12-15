import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PozycjeZamowienia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ilosc: number;

    @Column()
    cena_brutto: string;

    @Column()
    cena_netto: string;
}