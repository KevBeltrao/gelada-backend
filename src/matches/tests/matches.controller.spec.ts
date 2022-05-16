import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../../users/users.module';
import { MatchesController } from '../matches.controller';
import { MatchesRepository } from '../matches.repository';
import { MatchesService } from '../matches.service';
import { MongooseModule } from '@nestjs/mongoose';
import { rootDatabaseTestModule } from '../../test-utils/database/database-test-module';
import { MatchSchema } from '../interfaces/match.schema';

describe('MatchesController', () => {
  let controller: MatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        rootDatabaseTestModule(),
        MongooseModule.forFeature([{ name: 'Match', schema: MatchSchema }]),
      ],
      controllers: [MatchesController],
      providers: [MatchesService, MatchesRepository],
    }).compile();

    controller = module.get<MatchesController>(MatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
