import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CognitoUser } from 'amazon-cognito-identity-js';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOkResponse({
    description: 'List users',
    type: [User],
  })
  public async list(): Promise<User[]> {
    return await this.usersService.listUsers();
  }

  @Post()
  @ApiCreatedResponse({ description: 'User registration', type: User })
  @ApiBody({ type: CreateUserDto })
  public async create(
    @Body(new CreateUserPipe()) userData: CreateUserDto,
  ): Promise<CognitoUser> {
    return await this.usersService.createUser(userData);
  }
}
