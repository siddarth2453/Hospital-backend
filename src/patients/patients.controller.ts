import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './patients.interface';
import { CreatePatientDto } from './create-patients.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  // Create a new patient
  @Post()
  async createPatient(@Body() patientData: CreatePatientDto): Promise<Patient> {
    return await this.patientsService.createPatient(patientData);
  }

  // Get all patients
  @Get()
  async getAllPatients(): Promise<Patient[]> {
    return await this.patientsService.getAllPatients();
  }

  // Update patient details
  @Put(':id')
  async updatePatient(@Param('id') id: string, @Body() patientData: Partial<Patient>): Promise<Patient> {
    return await this.patientsService.updatePatient(id, patientData);
  }

  // Delete a patient
  @Delete(':id')
  async deletePatient(@Param('id') id: string): Promise<any> {
    return await this.patientsService.deletePatient(id);
  }
}