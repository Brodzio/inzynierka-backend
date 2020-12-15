import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum StatusValue {
    ACTIVE = "aktywny",
    SEND = "wysłany",
}

@Entity()
export class Statusy extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: StatusValue,
    })
    uprawnienia: number;
}