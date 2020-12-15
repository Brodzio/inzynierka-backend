import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Kategorie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa_kategorii: string;
}