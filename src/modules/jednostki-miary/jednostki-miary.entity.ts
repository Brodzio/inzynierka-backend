import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JednostkiMiary extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa: string;
}