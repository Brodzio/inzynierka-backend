import { Entity, Column, PrimaryGeneratedColumn, Unique, BaseEntity, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Faktury } from '../faktury/faktury.entity';
import { Zamowienia } from '../zamowienia/zamowienia.entity';
import { Adresy } from '../adresy/adresy.entity';
import { Statusy } from '../statusy/statusy.entity';

@Entity()
@Unique(['login'])
export class Klienci extends BaseEntity {

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

  async validatePassword(haslo: string): Promise<boolean> {
    const hash = await bcrypt.hash(haslo, this.sol);
    return hash === this.haslo;
  }

  @OneToMany(type => Faktury, faktury => faktury.klienci, { eager: true })
  faktury: Faktury[];

  @OneToMany(type => Zamowienia, zamowienia => zamowienia.klienci, { eager: true })
  zamowienia: Zamowienia[];

  @OneToOne(type => Adresy, adresy => adresy.klienci)
  @JoinColumn()
  adresy: Adresy;

  @ManyToOne(type => Statusy, statusy => statusy.klienci, { eager: false })
  statusy: Statusy;
}
