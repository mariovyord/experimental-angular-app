import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoInMemoryComponent } from './todo-in-memory/todo-in-memory.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todo_(in_memory)', component: TodoInMemoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
