import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Faktury extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nr_faktury: string;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_sprzedazy: Date;

    @Column()
    wartosc_netto: string;

    @Column()
    wartosc_brutto: string;

    @Column()
    wartosc_vat: string;

    @Column()
    rodzaj_dokumentu: string;
}