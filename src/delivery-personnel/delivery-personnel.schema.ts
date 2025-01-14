import { Schema } from 'mongoose';

export const DeliveryPersonnelSchema = new Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
});