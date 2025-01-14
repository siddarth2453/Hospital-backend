import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DeliveryPersonnelService } from './delivery-personnel.service';
import { DeliveryPersonnel } from './delivery-personnel.interface';
import { CreateDeliveryPersonnelDto } from './delivery-personnel.dto';

@Controller('delivery-personnel')
export class DeliveryPersonnelController {
  constructor(private readonly deliveryPersonnelService: DeliveryPersonnelService) {}

  // Create a new delivery personnel
  @Post()
  async createDeliveryPersonnel(@Body() deliveryDto: CreateDeliveryPersonnelDto): Promise<DeliveryPersonnel> {
    return await this.deliveryPersonnelService.createDeliveryPersonnel(deliveryDto);
  }

  // Get all delivery personnel
  @Get()
  async getAllDeliveryPersonnel(): Promise<DeliveryPersonnel[]> {
    return await this.deliveryPersonnelService.getAllDeliveryPersonnel();
  }

  // Update delivery personnel details
  @Put(':id')
  async updateDeliveryPersonnel(@Param('id') id: string, @Body() personnelData: Partial<DeliveryPersonnel>): Promise<DeliveryPersonnel> {
    return await this.deliveryPersonnelService.updateDeliveryPersonnel(id, personnelData);
  }

  // Delete delivery personnel
  @Delete(':id')
  async deleteDeliveryPersonnel(@Param('id') id: string): Promise<any> {
    return await this.deliveryPersonnelService.deleteDeliveryPersonnel(id);
  }
}