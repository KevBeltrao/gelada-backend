import { BadRequestException, Injectable } from '@nestjs/common';
import { Match } from './interfaces/match.interface';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {
  constructor(private matchesRepository: MatchesRepository) {}

  async createMatch(matchData: Match): Promise<Match> {
    try {
      const newMatch = await this.matchesRepository.createMatch(matchData);
      return newMatch;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async listMatches(): Promise<Match[]> {
    try {
      return await this.matchesRepository.listMatches();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
