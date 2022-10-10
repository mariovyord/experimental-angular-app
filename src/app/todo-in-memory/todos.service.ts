import { Injectable } from '@angular/core';
import { TodoList } from 'src/models/TodoList';

@Injectable()
export class TodosService {
    _todoLists: TodoList[] = []

    get todoLists() {
        return [...this._todoLists]
    }

    handleCreateList(title: string, description: string) {
        const newTodo = new TodoList(title, description);
        this._todoLists.push(newTodo);
    }

    handleDeleteList(index: number) {
        this._todoLists.splice(index, 1);
    }
}
