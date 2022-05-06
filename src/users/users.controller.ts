import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public async list(): Promise<User[]> {
    return await this.usersService.listUsers();
  }

  @Post()
  public async create(
    @Body(new CreateUserPipe()) userData: CreateUserDto,
  ): Promise<User> {
    return await this.usersService.createUser(userData);
  }
}
