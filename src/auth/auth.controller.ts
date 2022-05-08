import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { AuthService } from './auth.service';
import { ConfirmRegistrationDto } from './dtos/confirm-registration.dto';
import { LoginDto, LoginResponseDto } from './dtos/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ type: LoginResponseDto })
  async login(@Body() loginDto: LoginDto): Promise<CognitoUserSession> {
    return this.authService.login(loginDto);
  }

  @Post('confirm-registration')
  @ApiOperation({ summary: 'Send confirmation code' })
  @ApiBody({ type: ConfirmRegistrationDto })
  @ApiResponse({ type: String })
  async confirmRegistration(
    @Body() confirmRegistrationDto: ConfirmRegistrationDto,
  ): Promise<void> {
    return this.authService.confirmRegistration(confirmRegistrationDto);
  }
}
