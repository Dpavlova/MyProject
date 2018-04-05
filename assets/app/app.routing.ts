import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from "./projects/projects.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: `full` }, 
    { path: 'projects', component: ProjectsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);