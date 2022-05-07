import { BadRequestException, Injectable } from '@nestjs/common';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AwsCognitoService } from '../aws/aws-cognito.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersRepository } from './users-repository';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private awsCognitoService: AwsCognitoService,
  ) {}

  async listUsers(): Promise<User[]> {
    try {
      return await this.usersRepository.listUsers();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async createUser(userData: CreateUserDto): Promise<CognitoUser> {
    try {
      return await this.awsCognitoService.registerUser(userData);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
