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
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
    collection: 'Users',
  },
);
