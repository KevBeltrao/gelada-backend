import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { MatchesRepository } from '../matches.repository';
import { UsersModule } from '../../users/users.module';
import { MatchSchema } from '../interfaces/match.schema';
import { rootDatabaseTestModule } from '../../test-utils/database/database-test-module';

describe('MatchesRepository', () => {
  let repository: MatchesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        rootDatabaseTestModule(),
        MongooseModule.forFeature([{ name: 'Match', schema: MatchSchema }]),
      ],
      providers: [MatchesRepository],
    }).compile();

    repository = module.get<MatchesRepository>(MatchesRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
