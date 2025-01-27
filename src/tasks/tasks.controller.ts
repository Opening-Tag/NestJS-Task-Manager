import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './tasks.model';
import { CreateTaskDto } from './create-task.dto';
import { FindOneParams } from './find-one.params';

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly tasksService: TasksService
    ) { }
    @Get()
    public findAll(): ITask[] {   
        return this.tasksService.findAll();
    }
    //  @Param(') param: any => get all param objects 
    @Get('/:id')
    public findOne(@Param() params: FindOneParams): ITask {
        const task = this.tasksService.findOne(params.id);
        if (task) {
            return task
        }
        throw new NotFoundException;
    }

    @Post()
    public create(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto)
     }
}
