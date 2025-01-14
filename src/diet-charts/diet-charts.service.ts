import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DietChart } from './diet-charts.interface';

@Injectable()
export class DietChartsService {
  constructor(@InjectModel('DietChart') private readonly dietChartModel: Model<DietChart>) {}

  async createDietChart(dietChartData: Partial<DietChart>): Promise<DietChart> {
    const newDietChart = new this.dietChartModel(dietChartData);
    return await newDietChart.save();
  }

  async getAllDietCharts(): Promise<DietChart[]> {
    return await this.dietChartModel.find().populate('patientId').exec();
  }

  async updateDietChart(id: string, dietChartData: Partial<DietChart>): Promise<DietChart> {
    return await this.dietChartModel.findByIdAndUpdate(id, dietChartData, { new: true }).exec();
  }

  async deleteDietChart(id: string): Promise<any> {
    return await this.dietChartModel.findByIdAndDelete(id);
  }
}