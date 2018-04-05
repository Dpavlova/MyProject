import { Component, OnInit } from '@angular/core';

import { ProjectService } from './project.service';
import { Project } from './project.model';

@Component({
    selector: 'app-project-list',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <app-project 
            [project]="project" 
            *ngFor="let project of projects"
            >
        </app-project>
    </div>
    `
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit() {
        this.projectService.getProjects()
            .subscribe(
                (projects: Project[]) => {
                    this.projects = projects;
                }
            );
    }
}