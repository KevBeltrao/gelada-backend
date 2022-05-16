import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Match } from './interfaces/match.interface';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class MatchesRepository {
  constructor(
    @InjectModel('Match') private readonly matchModel: Model<Match>,
  ) {}

  async listMatches(id: mongoose.Schema.Types.ObjectId): Promise<Match[]> {
    const matches = await this.matchModel
      .find({ ownerId: id })
      .sort({ createdAt: -1 });
    return matches;
  }

  async createMatch(id: mongoose.Schema.Types.ObjectId): Promise<Match> {
    const newMatch = new this.matchModel({ ownerId: id });
    return await newMatch.save();
  }
}
