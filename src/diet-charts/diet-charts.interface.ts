export interface DietChart {
    _id?: string;
    patientId: string; // Reference to Patient
    morningMeal: string;
    eveningMeal: string;
    nightMeal: string;
    instructions: string; // Special instructions like "low salt"
  }