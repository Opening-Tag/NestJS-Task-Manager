import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { TaskStatus } from './tasks.model';
import { Type } from 'class-transformer';
import { CreateTaskLabelDto } from './create-task-label.dto';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateTaskLabelDto)
  labels?: CreateTaskLabelDto[];

 
}
