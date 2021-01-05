import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Komentarze } from '../komentarze/komentarze.entity';

@Entity()
export class Aktualnosci extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_opublikowania: string;

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
}