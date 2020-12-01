import { Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pracownik {

    constructor(imie: string, nazwisko: string, login: string, haslo: string, 
        nr_tel: string, email: string, data_zatrudnienia: Date, data_zwolnienia: Date, 
         sol: string, id_pracownik?: number){
        if(id_pracownik) this.id_pracownik = id_pracownik;
        this.email = email;
        this.haslo = haslo;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.login = login;
        this.haslo = haslo;
        this.nr_tel = nr_tel;
        this.data_zatrudnienia = data_zatrudnienia;
        this.data_zwolnienia = data_zwolnienia;
        this.sol = sol;

        //do zmiany !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.id_adres = 0;
        this.id_rodzaj_pracownika = 0;
        this.id_status = 0;
    }

    @PrimaryGeneratedColumn()
    id_pracownik:number;

    @Column({ length: 500 })
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

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_zatrudnienia: Date;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_zwolnienia: Date;

    @Column()
    sol: string;

    //To sa relacje, nie Column() beda do zmiany !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    @Column()
    id_adres: number;

    @Column()
    id_rodzaj_pracownika: number;
    
    @Column()
    id_status: number;
}
