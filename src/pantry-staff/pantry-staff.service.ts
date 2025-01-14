import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PantryStaff } from './pantry-staff.interface';

@Injectable()
export class PantryStaffService {
  constructor(@InjectModel('PantryStaff') private readonly pantryStaffModel: Model<PantryStaff>) {}

  async createPantryStaff(staffData: Partial<PantryStaff>): Promise<PantryStaff> {
    const newStaff = new this.pantryStaffModel(staffData);
    return await newStaff.save();
  }

  async getAllPantryStaff(): Promise<PantryStaff[]> {
    return await this.pantryStaffModel.find().exec();
  }

  async updatePantryStaff(id: string, staffData: Partial<PantryStaff>): Promise<PantryStaff> {
    return await this.pantryStaffModel.findByIdAndUpdate(id, staffData, { new: true }).exec();
  }

  async deletePantryStaff(id: string): Promise<any> {
    return await this.pantryStaffModel.findByIdAndDelete(id);
  }
}