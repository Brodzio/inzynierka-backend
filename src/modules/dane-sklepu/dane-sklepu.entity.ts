import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DaneSklepu extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nazwa: string;

    @Column()
    email: string;

    @Column({
        unique: true
    })
    nip: string;

    @Column()
    nr_tel: string;
}