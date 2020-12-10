import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aktualnosci extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
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
}