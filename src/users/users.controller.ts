import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CognitoUser } from 'amazon-cognito-identity-js';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'List users' })
  @ApiBearerAuth('access-token')
  @ApiOkResponse({
    description: 'List users',
    type: [User],
  })
  public async list(): Promise<User[]> {
    return await this.usersService.listUsers();
  }

  @Post()
  @ApiOperation({ summary: 'Register user' })
  @ApiCreatedResponse({ description: 'User registered', type: User })
  @ApiBody({ type: CreateUserDto })
  public async create(
    @Body(new CreateUserPipe()) userData: CreateUserDto,
  ): Promise<CognitoUser> {
    return await this.usersService.createUser(userData);
  }

  @Get('/:email')
  @ApiOperation({ summary: 'Get user by email' })
  @ApiOkResponse({
    description: 'User detailed',
    type: User,
  })
  public async detail(@Param('email') email: string): Promise<User> {
    return await this.usersService.detailUser(email);
  }
}
