import { EntityRepository, Repository } from 'typeorm';
import { PozycjePlatnosci } from './pozycje-platnosci.entity';

@EntityRepository(PozycjePlatnosci)
export class PozycjePlatnosciRepository extends Repository<PozycjePlatnosci> {

}