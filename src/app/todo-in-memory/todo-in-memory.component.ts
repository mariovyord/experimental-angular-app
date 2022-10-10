import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/models/TodoList';
import { TodosService } from './todos.service';

@Component({
    selector: 'app-todo-in-memory',
    templateUrl: './todo-in-memory.component.html',
    styleUrls: ['./todo-in-memory.component.css'],
    providers: [TodosService],
})
export class TodoInMemoryComponent {
    title = '';
    description = '';

    constructor(public todoService: TodosService) { }

    handleAddList() {
        this.todoService.handleCreateList(this.title, this.description);
    }
}
