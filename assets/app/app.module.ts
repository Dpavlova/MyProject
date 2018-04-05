import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { ProjectComponent } from "./projects/project.component";
import { ProjectListComponent } from "./projects/project-list.component";
import { ProjectInputComponent } from "./projects/project-input.component";
import { ProjectsComponent } from "./projects/projects.component";

import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        ProjectComponent,
        ProjectListComponent,
        ProjectInputComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        routing, 
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}