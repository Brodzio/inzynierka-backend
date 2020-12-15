import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Platnosci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_platnosci: Date;
}