import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: String,
  },
  {
    timestamps: true,
    collection: 'Users',
  },
);
