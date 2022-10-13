import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';

import { HomeComponent } from './home/home.component';
import { TodoInMemoryComponent } from './todo-in-memory/todo-in-memory.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { TodoListComponent } from './todo-in-memory/todo-list/todo-list.component';
import { TodoItemComponent } from './todo-in-memory/todo-list/todo-item/todo-item.component';
import { ProjectCardComponent } from './home/project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { KanbanFireComponent } from './kanban-fire/kanban-fire.component';
import { TaskComponent } from './kanban-fire/task/task.component';
import { TaskDialogComponent } from './kanban-fire/task-dialog/task-dialog.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TodoInMemoryComponent,
        HeaderComponent,
        SidenavListComponent,
        TodoListComponent,
        TodoItemComponent,
        ProjectCardComponent,
        FooterComponent,
        KanbanFireComponent,
        TaskComponent,
        TaskDialogComponent,
        CountriesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        FormsModule,
        MatTooltipModule,
        DragDropModule,
        MatDialogModule,
        HttpClientModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
