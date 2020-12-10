import { Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['login'])
export class Pracownicy {

    @PrimaryGeneratedColumn()
    id_pracownik:number;

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

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_zatrudnienia: Date;

    @Transform(date1 => (date1).format('DD/MM/YYYY'))
    @Column()
    data_zwolnienia: Date;

    @Column()
    sol: string;

    async validatePassword(haslo: string): Promise<boolean> {
        const hash = await bcrypt.hash(haslo, this.sol);
        return hash === this.haslo;
    }
}
