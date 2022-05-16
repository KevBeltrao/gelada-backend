import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from '../users/users-repository';
import { UpdateMatchDto } from './dtos/update-match.dto';
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

  async updateMatch(
    id: string,
    body: UpdateMatchDto,
    email: string,
  ): Promise<Match> {
    try {
      const match = await this.matchesRepository.getMatchById(id);
      if (!match) {
        throw new NotFoundException();
      }
      const user = await this.userRepository.getUserByEmail(email);
      if (String(user._id) !== String(match.ownerId)) {
        throw new ForbiddenException();
      }
      return await this.matchesRepository.updateMatch(id, body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async detailMatch(id: string): Promise<Match> {
    try {
      const match = await this.matchesRepository.getMatchById(id);
      if (!match) {
        throw new NotFoundException();
      }
      return match;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
