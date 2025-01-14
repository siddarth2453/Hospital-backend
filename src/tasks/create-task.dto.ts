import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9a-fA-F]{24}$/, { message: 'Invalid dietChartId' })
  dietChartId: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9a-fA-F]{24}$/, { message: 'Invalid staffId' })
  staffId: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9a-fA-F]{24}$/, { message: 'Invalid deliveryPersonnelId' })
  deliveryPersonnelId: string;

  @IsString()
  @IsNotEmpty()
  mealType: "morning" | "evening" | "night";

  @IsString()
  @IsNotEmpty()
  status: "pending" | "prepared" | "delivered";

  deliveryNotes?: string;
}