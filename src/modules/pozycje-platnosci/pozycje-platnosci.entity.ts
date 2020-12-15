import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PozycjePlatnosci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
}