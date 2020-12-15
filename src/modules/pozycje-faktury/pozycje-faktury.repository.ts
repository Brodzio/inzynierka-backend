import { EntityRepository, Repository } from 'typeorm';
import { PozycjeFaktury } from './pozycje-faktury.entity';

@EntityRepository(PozycjeFaktury)
export class PozycjeFakturyRepository extends Repository<PozycjeFaktury> {
    
}