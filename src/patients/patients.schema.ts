import { Schema } from 'mongoose';

export const PatientSchema = new Schema({
  name: { type: String, required: true },
  diseases: { type: String },
  allergies: { type: String },
  roomNumber: { type: Number, required: true },
  bedNumber: { type: Number, required: true },
  floorNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  contactInfo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
});