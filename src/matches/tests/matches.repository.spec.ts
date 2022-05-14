import { Test, TestingModule } from '@nestjs/testing';
import { MatchesRepository } from '../matches.repository';

describe('MatchesRepository', () => {
  let repository: MatchesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchesRepository],
    }).compile();

    repository = module.get<MatchesRepository>(MatchesRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
