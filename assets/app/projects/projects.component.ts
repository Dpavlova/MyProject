import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <div class="row">
            <h1>Add/Edit Projects</h1>
        </div>
        <hr>
        <div class="row">
            <app-project-input></app-project-input>
        </div>
        <hr>
        <div class="row">
            <h1>Projects</h1>
        </div>
        <hr>
        <div class="row">
            <app-project-list></app-project-list>
        </div>
    </div>
    `
})

export class ProjectsComponent {}