import { Component, Input } from '@angular/core';

import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent {
    @Input() project: Project;

    constructor(private projectService: ProjectService) {}

    onEdit() {
        this.projectService.editProject(this.project);
    }

    onDelete() {
        this.projectService.deleteProject(this.project)
            .subscribe(
                result => console.log(result)
            );
    }

    onAddHours() {
        this.projectService.addHours(this.project);
    }

    onInvoice() {
        console.log(this.projectService.sendInvoice(this.project));
        this.projectService.sendInvoice(this.project)
        .subscribe( (result) => {
                let price = this.project.timeUsed * 150;
                   console.log(this.project.timeUsed);
                   confirm('Dear ' + this.project.clientName + ', for you project, which I estimated at ' + 
                   this.project.estTime + ' hours, I used ' + this.project.timeUsed + ' hours, and that results in ' + 
                   price + 'DKK');
                
            
            }, (err) => {
                console.log(err);
            });
    }
}