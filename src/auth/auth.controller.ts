import { Body, Controller, Post } from '@nestjs/common';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { AuthService } from './auth.service';
import { ConfirmRegistrationDto } from './dtos/confirm-registration.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<CognitoUserSession> {
    return this.authService.login(loginDto);
  }

  @Post('confirm-registration')
  async confirmRegistration(
    @Body() confirmRegistrationDto: ConfirmRegistrationDto,
  ): Promise<void> {
    return this.authService.confirmRegistration(confirmRegistrationDto);
  }
}
