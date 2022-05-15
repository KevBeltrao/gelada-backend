import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Match } from './interfaces/match.interface';
import { Model } from 'mongoose';

@Injectable()
export class MatchesRepository {
  constructor(
    @InjectModel('Match') private readonly matchModel: Model<Match>,
  ) {}

  async listMatches(): Promise<Match[]> {
    const matches = await this.matchModel.find();
    return matches;
  }

  async createMatch(matchData: Match): Promise<Match> {
    const newMatch = new this.matchModel(matchData);
    return await newMatch.save();
  }
}
