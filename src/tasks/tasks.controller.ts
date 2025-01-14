import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.interface';
import { CreateTaskDto } from './create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto) {
      return await this.tasksService.createTask(createTaskDto);
    }
  

  // Get all tasks
  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.tasksService.getAllTasks();
  }

  // Update task status
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body('status') status: string): Promise<Task> {
    return await this.tasksService.updateTask(id, status);
  }
}