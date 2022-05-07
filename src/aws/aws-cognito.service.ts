import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';

import { CreateUserDto } from '../users/dtos/create-user.dto';
import { LoginDto } from '../auth/dtos/login.dto';
import { ConfirmRegistrationDto } from '../auth/dtos/confirm-registration.dto';

@Injectable()
export class AwsCognitoService {
  private userPool: CognitoUserPool;

  constructor(private configService: ConfigService) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.configService.get<string>('COGNITO_USER_POOL_ID'),
      ClientId: this.configService.get<string>('COGNITO_CLIENT_ID'),
    });
  }

  async registerUser(createUserDto: CreateUserDto): Promise<CognitoUser> {
    const { name, email, phone, password } = createUserDto;

    const userCognitoAttributes = [
      new CognitoUserAttribute({
        Name: 'phone_number',
        Value: phone,
      }),
      new CognitoUserAttribute({
        Name: 'name',
        Value: name,
      }),
    ];

    return new Promise((resolve, reject) => {
      this.userPool.signUp(
        email,
        password,
        userCognitoAttributes,
        null,
        (error, result) => {
          if (!result) {
            reject(error);
          } else {
            resolve(result.user);
          }
        },
      );
    });
  }

  async login(loginDto: LoginDto): Promise<CognitoUserSession> {
    const { email, password } = loginDto;

    const userData = {
      Username: email,
      Pool: this.userPool,
    };

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const userCognito = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      userCognito.authenticateUser(authenticationDetails, {
        onSuccess: (result) => resolve(result),
        onFailure: (error) => reject(error),
      });
    });
  }

  async confirmRegistration(
    confirmRegistrationDto: ConfirmRegistrationDto,
  ): Promise<void> {
    const { email, code } = confirmRegistrationDto;

    const userData = {
      Username: email,
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(code, true, (error, result) => {
        if (error) {
          reject(error);
        }

        resolve(result);
      });
    });
  }
}
