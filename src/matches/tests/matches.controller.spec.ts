import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from '../../users/users.module';
import { MatchesController } from '../matches.controller';
import { MatchesRepository } from '../matches.repository';
import { MatchesService } from '../matches.service';
import { rootDatabaseTestModule } from '../../test-utils/database/database-test-module';
import { MatchSchema } from '../interfaces/match.schema';

jest.mock('../matches.service.ts');

describe('MatchesController', () => {
  let controller: MatchesController;
  let service: MatchesService;

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
    service = module.get<MatchesService>(MatchesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service', () => {
    const req = { user: { email: 'emailteste@mail.com' } };
    controller.create(req);
    expect(service.createMatch).toHaveBeenCalled();
  });
});
