import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PracownicyService } from './pracownicy.service';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';

@Controller('pracownicy')
export class PracownicyController {
    constructor(
        private pracownicyService: PracownicyService,
    ) {}

    // @Post('/signin')
    // signInPracownicy(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    //     return this.pracownicyService.signInPracownicy(authCredentialsDto);
    // }
}