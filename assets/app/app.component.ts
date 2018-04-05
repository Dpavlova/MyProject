import { Component } from '@angular/core';

import { ProjectService } from './projects/project.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ProjectService]
    
})
export class AppComponent {}