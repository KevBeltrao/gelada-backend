import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { MatchesRepository } from '../matches.repository';
import { UsersModule } from '../../users/users.module';
import { MatchSchema } from '../interfaces/match.schema';
import { rootDatabaseTestModule } from '../../test-utils/database/database-test-module';
import { UserSchema } from '../../users/interfaces/user.schema';
import { UsersRepository } from '../../users/users-repository';

describe('MatchesRepository', () => {
  let repository: MatchesRepository;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        rootDatabaseTestModule(),
        MongooseModule.forFeature([
          { name: 'User', schema: UserSchema },
          { name: 'Match', schema: MatchSchema },
        ]),
      ],
      providers: [MatchesRepository],
    }).compile();

    repository = module.get<MatchesRepository>(MatchesRepository);
    usersRepository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create repository', async () => {
    const userData = {
      name: 'John Doe',
      phone: '81912341234',
      email: 'john.doe@gmail.com',
      password: 'Test!234',
    };

    const newUser = await usersRepository.createUser(userData);

    const newMatch = await repository.createMatch(newUser._id);

    expect(newMatch.ownerId).toBe(newUser._id);
  });
});
