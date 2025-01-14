import { Module } from '@nestjs/common';
import { DietChartsController } from './diet-charts.controller';
import { DietChartsService } from './diet-charts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DietChartSchema } from './diet-charts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DietChart', schema: DietChartSchema }]),
  ],
  controllers: [DietChartsController],
  providers: [DietChartsService],
  exports: [DietChartsService],
})
export class DietChartsModule {}