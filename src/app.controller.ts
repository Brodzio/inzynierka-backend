import { AuthService } from './auth/auth.service';
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
