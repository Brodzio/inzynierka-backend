import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Platnosci } from '../platnosci/platnosci.entity';
import { Faktury } from '../faktury/faktury.entity';

@Entity()
export class PozycjePlatnosci extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Platnosci, platnosci => platnosci.pozycje_platnosci, { eager: true })
    platnosci: Platnosci;

    @ManyToOne(type => Faktury, faktury => faktury.pozycje_platnosci, { eager: true })
    faktury: Faktury;
}