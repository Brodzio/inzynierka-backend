import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}