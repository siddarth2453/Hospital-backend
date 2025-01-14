import { Schema } from 'mongoose';

export const DietChartSchema = new Schema({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  morningMeal: { type: String, required: true },
  eveningMeal: { type: String, required: true },
  nightMeal: { type: String, required: true },
  instructions: { type: String },
});