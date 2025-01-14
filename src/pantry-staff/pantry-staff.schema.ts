import { Schema } from 'mongoose';

export const PantryStaffSchema = new Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String, required: false },
});