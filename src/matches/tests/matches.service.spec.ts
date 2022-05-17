import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { MatchesService } from '../matches.service';
import { UsersModule } from '../../users/users.module';
import { MatchesRepository } from '../matches.repository';
import { rootDatabaseTestModule } from '../../test-utils/database/database-test-module';
import { MatchSchema } from '../interfaces/match.schema';

jest.mock('../matches.repository.ts');

describe('MatchesService', () => {
  let service: MatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        rootDatabaseTestModule(),
        MongooseModule.forFeature([{ name: 'Match', schema: MatchSchema }]),
      ],
      providers: [MatchesService, MatchesRepository],
    }).compile();

    service = module.get<MatchesService>(MatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
