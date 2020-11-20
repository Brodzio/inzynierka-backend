import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Klienci {

    constructor(imie: string, nazwisko: string, login: string, haslo: string, 
        nazwa_firmy: string, regon: string, nip: string, nr_tel: string, email: string, sol: string){
        this.email = email;
        this.haslo = haslo;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.login = login;
        this.haslo = haslo;
        this.nazwa_firmy = nazwa_firmy;
        this.regon = regon;
        this.nip = nip;
        this.nr_tel = nr_tel;
        this.sol = sol;
    }
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

}
