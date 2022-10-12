import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskDialogComponent, TaskDialogResult } from './task-dialog/task-dialog.component';
import { Task } from './task.model';

// https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase

@Component({
    selector: 'app-kanban-fire',
    templateUrl: './kanban-fire.component.html',
    styleUrls: ['./kanban-fire.component.css']
})
export class KanbanFireComponent {
    todo: Task[] = [
        {
            title: 'Buy milk',
            description: 'Go to the store and buy milk',
        },
        {
            title: 'Create a Kanban app',
            description: 'Using Firebase and Angular create a Kanban app!',
        },
    ];
    inProgress: Task[] = [];
    done: Task[] = [];

    constructor(private dialog: MatDialog) { }

    newTask(): void {
        const dialogRef = this.dialog.open(TaskDialogComponent, {
            width: '270px',
            data: {
                task: {},
            },
        });
        dialogRef
            .afterClosed()
            .subscribe((result: TaskDialogResult) => {
                if (!result || !result.task.title || !result.task.description) {
                    return;
                }
                this.todo.push(result.task);
            });
    }

    editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
        const dialogRef = this.dialog.open(TaskDialogComponent, {
            width: '270px',
            data: {
                task,
                enableDelete: true,
            },
        });
        dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
            if (!result) {
                return;
            }
            const dataList = this[list];
            const taskIndex = dataList.indexOf(task);
            if (result.delete) {
                dataList.splice(taskIndex, 1);
            } else {
                dataList[taskIndex] = task;
            }
        });
    }

    drop(event: CdkDragDrop<Task[]>): void {
        if (event.previousContainer === event.container) {
            return;
        }
        transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );
    }
}
