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
            imageUrl: 'https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_960_720.jpg',
            content: 'Its nice.',
            routerLink: '/todo_(in_memory)'
        },
        {
            title: 'Kanban Board',
            subtitle: 'with Firebase',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg',
            content: 'Kanban Board! Woohooo',
            routerLink: '/kanban'
        },
        {
            title: 'Countries List',
            subtitle: 'Hello... to the world',
            imageUrl: 'https://cdn.pixabay.com/photo/2022/10/07/09/24/little-panda-7504633_960_720.jpg',
            content: 'Not much, but from the heart.',
            routerLink: '/countries'
        },
    ]

}
