import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  githubid: string;
  username: string;
  avatar?: string;
  profileUrl?: string;
  provider: string;
  displayName: string;
}

const userSchema = new Schema<IUser>({
  githubid: { type: String, required: true },
  username: { type: String, required: true },
  avatar: { type: String },
  profileUrl: { type: String },
  provider: { type: String, required: true },
  displayName: { type: String, required: true },
});

export const User = model<IUser>("User", userSchema);
