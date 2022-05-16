import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class Match {
  @ApiProperty({ type: Number, description: 'goalsA' })
  goalsA: number;
  @ApiProperty({ type: Number, description: 'goalsB' })
  goalsB: number;
  @ApiProperty({ type: mongoose.Schema.Types.ObjectId, description: 'ownerId' })
  ownerId: mongoose.Schema.Types.ObjectId;
  @ApiProperty({ type: Boolean, description: 'isActive' })
  isActive: boolean;
}
