import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DietChartsService } from './diet-charts.service';
import { DietChart } from './diet-charts.interface';
import { MealDetails } from './diet-charts.dto';

@Controller('diet-charts')
export class DietChartsController {
  constructor(private readonly dietChartsService: DietChartsService) {}

  // Create a new diet chart
  @Post()
  async createDietChart(@Body() dietChartData: MealDetails): Promise<DietChart> {
    return  this.dietChartsService.createDietChart(dietChartData);
  }

  // Get all diet charts
  @Get()
  async getAllDietCharts(): Promise<DietChart[]> {
    return await this.dietChartsService.getAllDietCharts();
  }

  // Update a diet chart
  @Put(':id')
  async updateDietChart(@Param('id') id: string, @Body() dietChartData: Partial<DietChart>): Promise<DietChart> {
    return await this.dietChartsService.updateDietChart(id, dietChartData);
  }

  // Delete a diet chart
  @Delete(':id')
  async deleteDietChart(@Param('id') id: string): Promise<any> {
    return await this.dietChartsService.deleteDietChart(id);
  }
}