import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pracownicy } from '../pracownicy/pracownicy.entity';

export enum UserRole {
    ADMIN = "admin",
    PRACOWNIK = "pracownik",
}

@Entity()
export class RodzajPracownika extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.PRACOWNIK
    })
    uprawnienia: number;

    @OneToOne(type => Pracownicy, pracownicy => pracownicy.rodzaj_pracownika)
    pracownicy: Pracownicy;
}