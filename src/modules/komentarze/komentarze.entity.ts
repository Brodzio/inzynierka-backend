import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produkty } from '../produkty/produkty.entity';
import { Aktualnosci } from '../aktualnosci/aktualnosci.entity';
import { Klienci } from '../klienci/klienci.entity';

@Entity()
export class Komentarze extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_dodania: Date;

    @Column({ nullable: true })
    data_modyfikacji: Date;

    @Column({
        type: "varchar",
        length: 300,
    })
    opis: string;

    @ManyToOne(type => Klienci, klienci => klienci.komentarze, { eager: true })
    klienci: Klienci | number;

    @ManyToOne(type => Produkty, produkty => produkty.komentarze, { eager: false, cascade: true })
    produkty: Produkty | number;

    @ManyToOne(type => Aktualnosci, aktualnosci => aktualnosci.komentarze, { eager: false, cascade: true })
    aktualnosci: Aktualnosci | number;
}