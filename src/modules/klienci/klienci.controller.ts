import { KlienciService } from './klienci.service';
import { Body, Controller ,Post , ValidationPipe } from '@nestjs/common';
import { CreateKlientDto } from './dto/create-klient.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class KlienciController {

  constructor(
    private klienciService: KlienciService
    ) {}
    
  @Post('/signup')
  signUp(@Body(ValidationPipe) createKlientDto: CreateKlientDto): Promise<void> {
    return this.klienciService.signUp(createKlientDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.klienciService.signIn(authCredentialsDto);
  }
}