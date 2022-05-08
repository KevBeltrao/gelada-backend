import { BadRequestException, Injectable } from '@nestjs/common';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { AwsCognitoService } from '../aws/aws-cognito.service';
import { ConfirmRegistrationDto } from './dtos/confirm-registration.dto';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(private awsCognitoService: AwsCognitoService) {}

  async login(loginDto: LoginDto): Promise<CognitoUserSession> {
    try {
      return this.awsCognitoService.login(loginDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async confirmRegistration(
    confirmRegistrationDto: ConfirmRegistrationDto,
  ): Promise<void> {
    try {
      return this.awsCognitoService.confirmRegistration(confirmRegistrationDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
