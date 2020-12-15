import { Transform } from "class-transformer";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ZdjeciaProduktow extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa: string;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_dodania: Date;
}