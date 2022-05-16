import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Match } from './interfaces/match.interface';
import { UpdateMatchDto } from './dtos/update-match.dto';

@Injectable()
export class MatchesRepository {
  constructor(
    @InjectModel('Match') private readonly matchModel: mongoose.Model<Match>,
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

  async getMatchById(id: string): Promise<Match> {
    const match = await this.matchModel.findById(id);
    return match;
  }

  async updateMatch(id: string, body: UpdateMatchDto): Promise<Match> {
    const match = await this.matchModel.findByIdAndUpdate(id, body, {
      returnOriginal: false,
    });
    return match;
  }
}
