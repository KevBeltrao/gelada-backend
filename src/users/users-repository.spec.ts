import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersRepository } from './users-repository';
import { UserSchema } from './interfaces/user.schema';
import {
  rootDatabaseTestModule,
  closeInDatabaseConnection,
} from '../test-utils/database/database-test-module';

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

  afterAll(async () => {
    await closeInDatabaseConnection();
  });
});
