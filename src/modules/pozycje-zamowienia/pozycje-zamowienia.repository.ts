import { EntityRepository, Repository } from 'typeorm';
import { PozycjeZamowienia } from './pozycje-zamowienia.entity';

@EntityRepository(PozycjeZamowienia)
export class PozycjeZamowieniaRepository extends Repository<PozycjeZamowienia> {
    
}