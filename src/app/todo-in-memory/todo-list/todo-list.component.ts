import { Component, Input } from '@angular/core';
import { TodoList } from 'src/models/TodoList';
import { TodosService } from '../todos.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    @Input() list: TodoList;
    @Input() index: number;
    newTask = '';
    showButton = false;

    constructor(private todosService: TodosService) { }

    handleAddNewTask() {
        if (this.newTask !== '') {
            this.todosService.addTesk(this.index, this.newTask)
            this.newTask = '';
        }
    }

    handleFinishTodo(todoIndex: number) {
        const newList = [...this.list.todos];
        newList[todoIndex].finished = !newList[todoIndex].finished;
        this.todosService.changeTasks(this.index, newList);
    }

    handleDeleteList() {
        this.todosService.deleteList(this.index);
    }
}
