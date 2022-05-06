import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

import { CreateUserDto, CreateUserDtoSwagger } from './dtos/create-user.dto';
import { User, UserSwagger } from './interfaces/user.interface';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOkResponse({
    description: 'List users',
    type: [UserSwagger],
  })
  public async list(): Promise<User[]> {
    return await this.usersService.listUsers();
  }

  @Post()
  @ApiCreatedResponse({ description: 'User registration', type: UserSwagger })
  @ApiBody({ type: CreateUserDtoSwagger })
  public async create(
    @Body(new CreateUserPipe()) userData: CreateUserDto,
  ): Promise<User> {
    return await this.usersService.createUser(userData);
  }
}
