import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produkty extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa_produktu: string;

    @Column()
    cena_brutto: string;

    @Column()
    cena_netto: string;

    @Column({
        type: "varchar",
        length: 500,
    })
    opis: string;

    @Column()
    ilosc: string;

    @Column({ unique: true })
    kod_produktu: string;
}