import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Zamowienia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_zlozenia: Date;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_przyjecia: Date;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_wysylki: Date;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_realizacji: Date;
}