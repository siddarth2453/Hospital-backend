export interface Patient {
    _id?: string;
    name: string;
    diseases: string;
    allergies: string;
    roomNumber: number;
    bedNumber: number;
    floorNumber: number;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    contactInfo: string;
    emergencyContact: string;
  }