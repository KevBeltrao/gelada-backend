import * as mongoose from 'mongoose';

export class Match {
  goalsA: number;
  goalsB: number;
  ownerId: mongoose.Schema.Types.ObjectId;
  isActive: boolean;
}
