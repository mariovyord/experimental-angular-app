import { Todo } from "./Todo";

export class TodoList {
    public todos: Todo[] = [];
    constructor(public title: string, public description: string) { }
}
