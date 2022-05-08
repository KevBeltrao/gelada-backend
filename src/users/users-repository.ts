import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async listUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userData);
    return await newUser.save();
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });

    return user;
  }
}
