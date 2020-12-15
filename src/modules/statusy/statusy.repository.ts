import { EntityRepository, Repository } from 'typeorm';
import { Statusy } from './statusy.entity';

@EntityRepository(Statusy)
export class StatusyRepository extends Repository<Statusy> {
    
}