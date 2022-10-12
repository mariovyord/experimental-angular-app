import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() task: Task | null = null;
    @Output() edit = new EventEmitter<Task>();

    constructor() { }

    ngOnInit(): void {
    }

}
