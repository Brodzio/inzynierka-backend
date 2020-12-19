import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produkty } from '../produkty/produkty.entity';
import { Aktualnosci } from '../aktualnosci/aktualnosci.entity';

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

    @ManyToOne(type => Produkty, produkty => produkty.komentarze, { eager: false })
    produkty: Produkty;

    @ManyToOne(type => Aktualnosci, aktualnosci => aktualnosci.komentarze, { eager: false })
    aktualnosci: Aktualnosci;
}