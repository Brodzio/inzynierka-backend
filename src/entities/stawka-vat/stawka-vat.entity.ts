import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StawkaVat {
    @PrimaryGeneratedColumn()
    id_vat:number;

    @Column()
    stawka_vat: string;

}
