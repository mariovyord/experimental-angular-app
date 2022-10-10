import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInMemoryComponent } from './todo-in-memory.component';

describe('TodoInMemoryComponent', () => {
  let component: TodoInMemoryComponent;
  let fixture: ComponentFixture<TodoInMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
