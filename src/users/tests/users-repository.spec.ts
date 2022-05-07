import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersRepository } from '../users-repository';
import { UserSchema } from '../interfaces/user.schema';
import {
  rootDatabaseTestModule,
  closeInDatabaseConnection,
} from '../../test-utils/database/database-test-module';

describe('UsersRepository', () => {
  let provider: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootDatabaseTestModule(),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [UsersRepository],
    }).compile();

    provider = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should create an user with the correct info', async () => {
    const userData = {
      name: 'John Doe',
      phone: '81912341234',
      email: 'john.doe@gmail.com',
      password: 'Test!234',
    };

    const newUser = await provider.createUser(userData);

    expect(newUser.name).toBe(userData.name);
    expect(newUser.phone).toBe(userData.phone);
    expect(newUser.email).toBe(userData.email);
  });

  afterEach(async () => {
    await closeInDatabaseConnection();
  });
});
