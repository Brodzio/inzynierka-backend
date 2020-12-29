import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn, ManyToOne, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Adresy } from '../adresy/adresy.entity';
import { StatusValue } from '../../enum/statusy.enum';

export enum UserRole {
    ADMIN = "admin",
    PRACOWNIK = "pracownik",
}

@Entity()
@Unique(['login'])
export class Pracownicy extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imie: string;

    @Column()
    nazwisko: string;

    @Column()
    login: string;

    @Column()
    haslo: string;

    @Column()
    nr_tel: string;

    @Column()
    email: string;

    @Column()
    data_zatrudnienia: string;

    @Column()
    data_zwolnienia: string;

    @Column()
    sol: string;

    async validatePassword(haslo: string): Promise<boolean> {
        const hash = await bcrypt.hash(haslo, this.sol);
        return hash === this.haslo;
    }

    @OneToOne(type => Adresy, adresy => adresy.klienci, { eager: true, cascade: true })
    @JoinColumn()
    adresy: Adresy | number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.PRACOWNIK
    })
    uprawnienia: UserRole;

    @Column({
        type: "enum",
        enum: StatusValue,
        default: StatusValue.ACTIVE
    })
    statusy: StatusValue;
}
