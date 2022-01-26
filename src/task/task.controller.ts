import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { TaskService } from './task.service';

@ApiTags('Task')
@Controller({
  path: 'task/example',
  version: '1',
})
export class TaskController {
  constructor(private service: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create POST' })
  create() {
    return this.service.create();
  }

  @Put()
  @ApiOperation({ summary: 'Update POST' })
  update(@Param('body') body: string): void {
    return this.service.update(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get request' })
  @ApiResponse({ status: 200, description: 'Method GET succesfull' })
  get() {
    return this.service.get();
  }

  @Delete()
  @ApiOperation({ summary: 'Delete request' })
  @ApiResponse({ status: 404, description: 'Method DELETE not found' })
  delete() {
    return this.service.delete();
  }
}
