import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeliveryPersonnelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  contactInfo: string;

  @IsString()
  @IsNotEmpty()
  role: string; // Example: "Delivery Personnel"
}