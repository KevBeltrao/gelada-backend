import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/users')
  public create(@Body(new CreateUserPipe()) userData: CreateUserDto) {
    this.usersService.createUser(userData);
  }
}
