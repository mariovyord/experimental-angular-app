import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KanbanFireComponent } from './kanban-fire/kanban-fire.component';
import { TodoInMemoryComponent } from './todo-in-memory/todo-in-memory.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todo_(in_memory)', component: TodoInMemoryComponent },
    { path: 'kanban', component: KanbanFireComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
