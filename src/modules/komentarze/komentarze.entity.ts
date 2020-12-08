import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Komentarze extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_dodania: string;

    @Column()
    data_modyfikacji: string;

    @Column({
        type: "varchar",
        length: 300,
    })
    opis: string;
}