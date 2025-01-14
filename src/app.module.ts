import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { DietChartsModule } from './diet-charts/diet-charts.module';
import { PantryStaffModule } from './pantry-staff/pantry-staff.module';
import { DeliveryPersonnelModule } from './delivery-personnel/delivery-personnel.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/hospital_management'),
    AuthModule,
    PatientsModule,
    DietChartsModule,
    PantryStaffModule,
    DeliveryPersonnelModule,
    TasksModule,
  ],
})
export class AppModule {}
