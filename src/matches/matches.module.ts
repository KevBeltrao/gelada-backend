import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { MatchesRepository } from './matches.repository';

@Module({
  imports: [MatchesModule],
  controllers: [MatchesController],
  providers: [MatchesService, MatchesRepository],
})
export class MatchesModule {}
