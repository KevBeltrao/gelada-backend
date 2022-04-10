import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  createUser(create: CreateUserDto) {
    console.log(create);
    throw new Error('Not implemented');
  }
}
