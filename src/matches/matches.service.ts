import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users-repository';
import { Match } from './interfaces/match.interface';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {
  constructor(
    private matchesRepository: MatchesRepository,
    private userRepository: UsersRepository,
  ) {}

  async createMatch(email: string): Promise<Match> {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      const newMatch = await this.matchesRepository.createMatch(user._id);
      return newMatch;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async listMatches(email: string): Promise<Match[]> {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      return await this.matchesRepository.listMatches(user._id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
