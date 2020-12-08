import { ClassSerializerInterceptor, Injectable, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracownicyRepository } from './pracownicy.repository';
import { JwtService } from '@nestjs/jwt';
import { JwtPayLoad } from '../../../dist/auth/jwt-payload.interface';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { Pracownicy } from './pracownicy.entity';

@Injectable()
export class PracownicyService {
    constructor(
        @InjectRepository(PracownicyRepository)
        private pracownicyRepository: PracownicyRepository,
        //private jwtService: JwtService,
    ) {}

    // async signInPracownicy(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    //     const login = await this.pracownicyRepository.validateUserPassword(authCredentialsDto);

    //     if(!login) {
    //         throw new UnauthorizedException('Invalid credentials!');
    //     }

    //     const payload: JwtPayLoad = { login };
    //     const accessToken = await this.jwtService.sign(payload);

    //     return { accessToken };
    // }

    @UseInterceptors(ClassSerializerInterceptor)
    findAll(): Promise<Pracownicy[]> {
        return this.pracownicyRepository.find();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    findOne(username: string): Promise<Pracownicy> {
        return this.pracownicyRepository.findOne({where: {'login':username}});
    }

    async remove(id: string): Promise<void> {
        await this.pracownicyRepository.delete(id);
    }

    async createOne( klienci: Pracownicy) {
        this.pracownicyRepository.save(klienci);
    }
}