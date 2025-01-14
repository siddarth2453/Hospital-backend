import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeliveryPersonnel } from './delivery-personnel.interface';

@Injectable()
export class DeliveryPersonnelService {
  constructor(
    @InjectModel('DeliveryPersonnel') private readonly deliveryPersonnelModel: Model<DeliveryPersonnel>,
  ) {}

  async createDeliveryPersonnel(personnelData: Partial<DeliveryPersonnel>): Promise<DeliveryPersonnel> {
    const newPersonnel = new this.deliveryPersonnelModel(personnelData);
    return await newPersonnel.save();
  }

  async getAllDeliveryPersonnel(): Promise<DeliveryPersonnel[]> {
    return await this.deliveryPersonnelModel.find().exec();
  }

  async updateDeliveryPersonnel(id: string, personnelData: Partial<DeliveryPersonnel>): Promise<DeliveryPersonnel> {
    return await this.deliveryPersonnelModel.findByIdAndUpdate(id, personnelData, { new: true }).exec();
  }

  async deleteDeliveryPersonnel(id: string): Promise<any> {
    return await this.deliveryPersonnelModel.findByIdAndDelete(id);
  }
}