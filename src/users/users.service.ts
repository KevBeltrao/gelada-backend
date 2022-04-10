import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersRepository } from './users-repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    return await this.usersRepository.createUser(userData);
  }
}
