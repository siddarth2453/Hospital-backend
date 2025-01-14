import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePantryStaffDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  contactInfo: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}