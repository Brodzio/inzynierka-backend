import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PozycjeFaktury extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cena_netto_sprzedazy: string;

    @Column()
    cena_brutto_sprzedazy: string;

    @Column()
    procent_vat_sprzedazy: number;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_sprzedazy: Date;
}