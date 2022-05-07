import { Injectable } from '@nestjs/common';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { AwsCognitoService } from '../aws/aws-cognito.service';
import { ConfirmRegistrationDto } from './dtos/confirm-registration.dto';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(private awsCognitoService: AwsCognitoService) {}

  async login(loginDto: LoginDto): Promise<CognitoUserSession> {
    return this.awsCognitoService.login(loginDto);
  }

  async confirmRegistration(
    confirmRegistrationDto: ConfirmRegistrationDto,
  ): Promise<void> {
    return this.awsCognitoService.confirmRegistration(confirmRegistrationDto);
  }
}
