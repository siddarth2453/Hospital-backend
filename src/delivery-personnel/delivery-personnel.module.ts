import { Module } from '@nestjs/common';
import { DeliveryPersonnelController } from './delivery-personnel.controller';
import { DeliveryPersonnelService } from './delivery-personnel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryPersonnelSchema } from './delivery-personnel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DeliveryPersonnel', schema: DeliveryPersonnelSchema }]),
  ],
  controllers: [DeliveryPersonnelController],
  providers: [DeliveryPersonnelService],
  exports: [DeliveryPersonnelService],
})
export class DeliveryPersonnelModule {}