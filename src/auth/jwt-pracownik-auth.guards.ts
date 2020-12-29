import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtPracownikAuthGuard extends AuthGuard('jwt-pracownik') {}