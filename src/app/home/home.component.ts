import { Component } from '@angular/core';
import { IProject } from './project.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    projects: IProject[] = [
        {
            title: 'To-Do App',
            subtitle: '(in memory)',
            imageUrl: '/assets/images/todo-500x280.png',
            content: 'Its nice.',
            routerLink: '/todo_(in_memory)'
        },
        {
            title: 'Kanban Board',
            subtitle: 'with Firebase',
            imageUrl: '/assets/images/kanban-500x280.png',
            content: 'Kanban Board! Woohooo',
            routerLink: '/kanban'
        },
        {
            title: 'Hello World',
            subtitle: 'Hello... to the world',
            imageUrl: '/assets/images/todo-500x280.png',
            content: 'Not much, but from the heart.',
            routerLink: '/'
        },
    ]

}
