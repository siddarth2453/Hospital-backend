import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  dietChartId: { type: Schema.Types.ObjectId, ref: 'DietChart', required: true },
  staffId: { type: Schema.Types.ObjectId, ref: 'PantryStaff', required: true },
  deliveryPersonnelId: { type: Schema.Types.ObjectId, ref: 'DeliveryPersonnel', required: true },
  mealType: { type: String, enum: ["morning", "evening", "night"], required: true },
  status: { type: String, enum: ["pending", "prepared", "delivered"], required: true },
  deliveryNotes: { type: String },
});