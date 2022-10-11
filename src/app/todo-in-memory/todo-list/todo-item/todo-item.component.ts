import { Component, Input } from '@angular/core';
import { Todo } from 'src/models/Todo';
import { TodosService } from '../../todos.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    showButton = false;

    constructor(private todosService: TodosService) { }

    handleDeleteTodo() {
        this.todosService.deleteTask(this.todo.id)
    }
}
