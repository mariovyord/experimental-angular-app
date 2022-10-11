import { v4 as uuidv4 } from 'uuid';

export class Todo {
    finished = false;
    id: string;
    constructor(public description: string) {
        this.id = uuidv4();
    }
}
