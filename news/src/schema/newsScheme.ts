import { Schema } from 'mongoose';

export interface News{
  title: string;
  status: boolean;
  created_at: string;
  updated_at: string;
} 

export const newsScheme = new Schema<News>({
  title: { type: String, required: true },
  status: { type: Boolean, required: true },
  created_at: { type: String, required: true },
  updated_at: String,
});