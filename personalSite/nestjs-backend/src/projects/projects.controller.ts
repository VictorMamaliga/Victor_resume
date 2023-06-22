import { Controller, Get, Post, Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get()
    getAll() {
        return this.projectsService.getAll()
    }

    @Post('create')
    createProject(@Req() request: Request) {
        return this.projectsService.createProject(request.body);
    }

    @Post('delete')
    deleteProject(@Req() request: Request) {
        return this.projectsService.deleteProject(request.body);
    }
}
