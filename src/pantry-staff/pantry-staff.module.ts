import { Module } from '@nestjs/common';
import { PantryStaffController } from './pantry-staff.controller';
import { PantryStaffService } from './pantry-staff.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PantryStaffSchema } from './pantry-staff.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PantryStaff', schema: PantryStaffSchema }]),
  ],
  controllers: [PantryStaffController],
  providers: [PantryStaffService],
  exports: [PantryStaffService],
})
export class PantryStaffModule {}