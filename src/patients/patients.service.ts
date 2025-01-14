import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './patients.interface';

@Injectable()
export class PatientsService {
  constructor(@InjectModel('Patient') private readonly patientModel: Model<Patient>) {}

  async createPatient(patientData: Partial<Patient>): Promise<Patient> {
    const newPatient = new this.patientModel(patientData);
    return await newPatient.save();
  }

  async getAllPatients(): Promise<Patient[]> {
    return await this.patientModel.find().exec();
  }

  async updatePatient(id: string, patientData: Partial<Patient>): Promise<Patient> {
    return await this.patientModel.findByIdAndUpdate(id, patientData, { new: true }).exec();
  }

  async deletePatient(id: string): Promise<any> {
    return await this.patientModel.findByIdAndDelete(id);
  }
}