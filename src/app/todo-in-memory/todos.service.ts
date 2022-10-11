import { Injectable } from '@angular/core';
import { Todo } from 'src/models/Todo';
import { TodoList } from 'src/models/TodoList';

@Injectable()
export class TodosService {
    _todoLists: TodoList[] = [{
        title: 'Tasks 1',
        description: 'Web Dev tasks',
        todos: [new Todo('Fun'), new Todo('Games')]
    }]

    get todoLists() {
        return [...this._todoLists]
    }

    createList(title: string, description: string) {
        const newTodo = new TodoList(title, description);
        this._todoLists.push(newTodo);
    }

    handleDeleteList(index: number) {
        this._todoLists.splice(index, 1);
    }

    addTesk(listIndex: number, taskDescription: string) {
        this._todoLists[listIndex].todos.push(new Todo(taskDescription));
    }

    changeTasks(listIndex: number, newTodos: Todo[]) {
        this._todoLists[listIndex].todos = newTodos;
    }

    deleteTask(taskId: string) {
        this._todoLists.forEach(list => {
            list.todos = list.todos.filter(x => x.id !== taskId);
        })
    }
}
