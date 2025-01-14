export interface User {
    _id?: string;
    email: string;
    password: string; // Hashed password
    role: 'hospital_manager' | 'pantry_staff' | 'delivery_personnel'; // Role-based access
  }