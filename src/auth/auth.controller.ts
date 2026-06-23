import { Controller, Post, UseGuards, Request, Body, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ZodValidationPipe } from 'src/validation.pipe';
import { registerSchema, type RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(
    private authService: AuthService,
  ) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
