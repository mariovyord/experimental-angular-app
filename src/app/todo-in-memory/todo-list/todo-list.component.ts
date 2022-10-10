import { Component, Input, OnInit } from '@angular/core';
import { TodoList } from 'src/models/TodoList';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    @Input() list: TodoList;
    constructor() { }
}
