import { Entity, Column, PrimaryGeneratedColumn, Unique, BaseEntity, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Faktury } from '../faktury/faktury.entity';
import { Zamowienia } from '../zamowienia/zamowienia.entity';
import { Adresy } from '../adresy/adresy.entity';
import { StatusValue } from '../../enum/statusy.enum';

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

  @Column({ nullable: true })
  nazwa_firmy: string;

  @Column({ nullable: true })
  regon: string;

  @Column({ nullable: true })
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

  @OneToMany(type => Faktury, faktury => faktury.klienci)
  faktury: Faktury[];

  @OneToMany(type => Zamowienia, zamowienia => zamowienia.klienci)
  zamowienia: Zamowienia[];

  @OneToOne(type => Adresy, adresy => adresy.klienci, { eager: true, cascade: true })
  @JoinColumn()
  adresy: Adresy | number;

  @Column({
    type: "enum",
    enum: StatusValue,
    default: StatusValue.ACTIVE
  })
  statusy: StatusValue;
}
