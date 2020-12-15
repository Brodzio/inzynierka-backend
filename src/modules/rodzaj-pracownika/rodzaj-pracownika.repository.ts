import { EntityRepository, Repository } from 'typeorm';
import { RodzajPracownika } from './rodzaj.pracownika.entity';

@EntityRepository(RodzajPracownika)
export class RodzajPracownikaRepository extends Repository<RodzajPracownika> {
    
}