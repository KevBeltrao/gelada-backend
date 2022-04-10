import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersRepository } from './users-repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  createUser(userData: CreateUserDto) {
    this.usersRepository.createUser(userData);
  }
}
