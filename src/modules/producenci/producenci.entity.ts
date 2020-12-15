import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producenci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa_producenta: string;
}