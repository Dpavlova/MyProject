import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ProjectService } from './project.service';
import { Project } from './project.model';

@Component({
    selector: 'app-project-input',
    templateUrl: 'project-input.component.html'
})
export class ProjectInputComponent implements OnInit {
    project: Project;

    constructor(private projectService: ProjectService) {}

    onSubmit(form: NgForm) {
        if (this.project) {
            this.project.projectName = form.value.projectName;
            this.project.clientName = form.value.clientName;
            this.project.estTime = form.value.estTime;
            this.project.timeUsed = form.value.timeUsed;
            this.projectService.updateProject(this.project)
             .subscribe(
                    result => console.log(result)
                );
            this.project = null;
        } else {
            if(form.value.timeUsed === null || form.value.timeUsed === undefined) {
                form.value.timeUsed = 0;
            }
            const project = new Project(form.value.projectName, form.value.clientName, form.value.estTime, form.value.timeUsed);
            this.projectService.addProject(project)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.project = null;
        form.resetForm();
    }

    ngOnInit() {
        this.projectService.projectIsEdit.subscribe(
            (project: Project) => this.project = project
        );

    }
}