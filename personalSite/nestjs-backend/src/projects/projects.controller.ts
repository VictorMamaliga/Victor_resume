import { Controller, Get, Post, Put, Delete, Req, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get()
    getAllProjects() {
        return this.projectsService.getAllProjects();
    }

    @Post('create')
    createProject(@Req() request: Request) {
        return this.projectsService.createProject(request.body);
    }

    @Put(':id')
    editProject(@Req() request: Request, @Param('id') id: string) {
        return this.projectsService.editProject(request.body, id);
    }

    @Delete('delete')
    deleteProject(@Req() request: Request) {
        return this.projectsService.deleteProject(request.body);
    }
}
