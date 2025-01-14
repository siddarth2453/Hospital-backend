import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PantryStaffService } from './pantry-staff.service';
import { PantryStaff } from './pantry-staff.interface';
import { CreatePantryStaffDto } from './create-pantrystaff.dto';

@Controller('pantry-staff')
export class PantryStaffController {
  constructor(private readonly pantryStaffService: PantryStaffService) {}

  // Create a new pantry staff
  @Post()
  async createPantryStaff(@Body() staffData: CreatePantryStaffDto): Promise<PantryStaff> {
    return await this.pantryStaffService.createPantryStaff(staffData);
  }

  // Get all pantry staff
  @Get()
  async getAllPantryStaff(): Promise<PantryStaff[]> {
    return await this.pantryStaffService.getAllPantryStaff();
  }

  // Update pantry staff details
  @Put(':id')
  async updatePantryStaff(@Param('id') id: string, @Body() staffData: Partial<PantryStaff>): Promise<PantryStaff> {
    return await this.pantryStaffService.updatePantryStaff(id, staffData);
  }

  // Delete pantry staff
  @Delete(':id')
  async deletePantryStaff(@Param('id') id: string): Promise<any> {
    return await this.pantryStaffService.deletePantryStaff(id);
  }
}