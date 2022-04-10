import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersRepository {
  createUser(userData: CreateUserDto) {
    console.log(userData);
  }
}
