import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Komentarze extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_dodania: Date;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_modyfikacji: Date;

    @Column({
        type: "varchar",
        length: 300,
    })
    opis: string;
}