import { Entity, Column, PrimaryGeneratedColumn, Unique, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['login'])
export class Klienci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_klient:number;

    @Column()
    imie: string;

    @Column()
    nazwisko: string;

    @Column()
    login: string;

    @Column()
    haslo: string;

    @Column()
    nazwa_firmy: string;

    @Column()
    regon: string;

    @Column()
    nip: string;

    @Column()
    nr_tel: string;

    @Column()
    email: string;

    @Column()
    sol: string;

    // async validatePassword(haslo: string): Promise<boolean> {
    //     const hash = await bcrypt.hash(haslo, this.sol);
    //     return hash === this.haslo;
    //   }

}
