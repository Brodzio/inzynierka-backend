import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Pracownicy } from './pracownicy.entity';

@EntityRepository(Pracownicy)
export class PracownicyRepository extends Repository<Pracownicy> {
    
    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { login, haslo } = authCredentialsDto;
        const user = await this.findOne({ login });

        if (user && await user.validatePassword(haslo)) {
            return user.login;
        } else {
            return null;
        }
    }
}