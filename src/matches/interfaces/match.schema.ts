import * as mongoose from 'mongoose';

export const MatchSchema = new mongoose.Schema(
  {
    goalsA: {
      type: Number,
      required: true,
      default: 0,
    },
    goalsB: {
      type: Number,
      required: true,
      default: 0,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true, collection: 'matches' },
);
