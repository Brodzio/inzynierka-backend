import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Komentarze } from '../komentarze/komentarze.entity';
import { Pracownicy } from '../pracownicy/pracownicy.entity';

@Entity()
export class Aktualnosci extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_opublikowania: Date;

    @Column()
    tytul: string;

    @Column({
        type: "varchar",
        length: 2000,
    })
    opis: string;
    
    @Column()
    zdjecie: string;

    @OneToMany(type => Komentarze, komentarze => komentarze.aktualnosci)
    komentarze: Komentarze[];

    @ManyToOne(type => Pracownicy, pracownicy => pracownicy.aktualnosci, { eager: true })
    pracownicy: Pracownicy | number;
}