import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Project } from './project.model';

@Injectable()  //when injecting a service inside a service we need to have a metadata 
export class ProjectService {
    private projects: Project[] = [];
    projectIsEdit = new EventEmitter<Project>();
    hoursIsEdit = new EventEmitter<Project>();

    constructor(private http: Http) {}

    addProject(project: Project) {
        const body = JSON.stringify(project);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/projects', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const project = new Project(result.obj.projectName, result.obj.clientName, result.obj.estTime, result.obj.timeUsed, result.obj._id);
                this.projects.push(project);
                return project;
            })
            .catch((error: Response) => Observable.throw(error.json())); 
    }

    getProjects() {
        return this.http.get('http://localhost:3000/projects')
            .map((response: Response) => {
                const projects = response.json().obj;
                let transformProjects: Project[] = [];
                for (let project of projects) {
                    transformProjects.push(new Project(project.projectName, project.clientName, project.estTime, project.timeUsed, project._id));
                }
                this.projects = transformProjects;
                return transformProjects;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editProject(project: Project) {
        this.projectIsEdit.emit(project);
    }

    addHours(project: Project) {
        this.hoursIsEdit.emit(project);
    }

    updateProject(project: Project) {
        const body = JSON.stringify(project);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/projects/' + project.projectId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json())); 
    }

    deleteProject(project: Project) {
        this.projects.splice(this.projects.indexOf(project), 1);
        return this.http.delete('http://localhost:3000/projects/' + project.projectId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
        
    }

    sendInvoice(project: Project) {
        let myParams = new URLSearchParams();
        return this.http.get('http://localhost:3000/projects/' + project.projectId)
            .map((response: Response) => {
                const project = response.json().obj;
                return project;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}