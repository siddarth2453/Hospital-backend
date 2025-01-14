import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class RegisterDto {
  // @IsString()
  // @IsNotEmpty()
  // name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  role: 'hospital_manager'| 'pantry_staff'| 'delivery_personnel'; // Example: "Admin", "Pantry Staff", "Delivery Personnel"
}