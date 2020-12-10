import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class StawkaVat extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stawka_vat: string;
}
