import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class MealDetails {
  @IsString()
  @IsNotEmpty()
  mealType: string; // Example: "morning"

  @IsString()
  @IsNotEmpty()
  ingredients: string;

  @IsString()
  @IsNotEmpty()
  instructions: string;
}

export class CreateDietChartDto {
  @IsString()
  @IsNotEmpty()
  patientId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealDetails)
  meals: MealDetails[];
}