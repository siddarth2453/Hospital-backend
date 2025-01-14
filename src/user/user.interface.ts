export interface User {
    _id?: string;
    email: string;
    password: string;
    role: 'hospital_manager' | 'pantry_staff' | 'delivery_personnel';
}