import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../project.model';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
    @Input() project: IProject;
}
