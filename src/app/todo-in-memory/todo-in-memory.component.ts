import { Component } from '@angular/core';
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
        if (this.title !== '' && this.description !== '') {
            this.todoService.createList(this.title, this.description);
            this.title = '';
            this.description = '';
        }
    }
}
