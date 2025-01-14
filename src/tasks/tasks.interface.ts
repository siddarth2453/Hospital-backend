export interface Task {
    _id?: string;
    dietChartId: string; // Reference to DietChart
    staffId: string; // Reference to PantryStaff
    deliveryPersonnelId: string; // Reference to DeliveryPersonnel
    mealType: "morning" | "evening" | "night";
    status: "pending" | "prepared" | "delivered"; // Task status
    deliveryNotes?: string; // Optional delivery notes
  }