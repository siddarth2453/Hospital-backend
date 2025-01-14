import { IsNotEmpty, IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsEnum(['Male', 'Female', 'Other'], { message: 'gender must be one of: male, female, other' })
  gender: 'Male' | 'Female' | 'Other';

  @IsString()
  @IsOptional()
  diseases?: string;

  @IsString()
  @IsOptional()
  allergies?: string;

  @IsString()
  @IsNotEmpty()
  roomNumber: number;

  @IsString()
  @IsNotEmpty()
  bedNumber: number;

  @IsString()
  @IsNotEmpty()
  floorNumber: number;

  @IsString()
  @IsNotEmpty()
  contactInfo: string;

  @IsString()
  @IsNotEmpty()
  emergencyContact: string;
}