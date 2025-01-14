import { IsString, IsNotEmpty, IsEmail, Matches, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, {
    message:
      'Password must be at least 8 characters long and contain at least one letter and one number',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['hospital_manager', 'pantry_staff', 'delivery_personnel'], {
    message: 'Role must be one of hospital_manager, pantry_staff, or delivery_personnel',
  })
  role: 'hospital_manager' | 'pantry_staff' | 'delivery_personnel';
}
