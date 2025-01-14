import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Task } from './tasks.interface';
import { CreateTaskDto } from './create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { dietChartId, staffId, deliveryPersonnelId } = createTaskDto;

    // Convert IDs to ObjectId
    if (!Types.ObjectId.isValid(dietChartId)) {
      throw new BadRequestException(`Invalid dietChartId: ${dietChartId}`);
    }
    if (!Types.ObjectId.isValid(staffId)) {
      throw new BadRequestException(`Invalid staffId: ${staffId}`);
    }
    if (!Types.ObjectId.isValid(deliveryPersonnelId)) {
      throw new BadRequestException(`Invalid deliveryPersonnelId: ${deliveryPersonnelId}`);
    }

    const newTask = new this.taskModel({
      ...createTaskDto,
      dietChartId: new Types.ObjectId(dietChartId),
      staffId: new Types.ObjectId(staffId),
      deliveryPersonnelId: new Types.ObjectId(deliveryPersonnelId),
    });

    return await newTask.save();
  }


  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel
      .find()
      .populate(['dietChartId', 'staffId', 'deliveryPersonnelId'])
      .exec();
  }

  async updateTask(id: string, status: string): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async deleteTask(id: string): Promise<any> {
    return await this.taskModel.findByIdAndDelete(id).exec();
  }
}