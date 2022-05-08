import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async createUser(userData: CreateUserDto): Promise<User> {
    try {
      await this.awsCognitoService.registerUser(userData);
      const newUser = await this.usersRepository.createUser(userData);

      return newUser;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async detailUser(email: string): Promise<User> {
    try {
      const user = await this.usersRepository.getUserByEmail(email);

      if (!user) {
        throw new NotFoundException();
      }

      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
