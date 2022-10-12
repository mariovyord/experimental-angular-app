import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanFireComponent } from './kanban-fire.component';

describe('KanbanFireComponent', () => {
  let component: KanbanFireComponent;
  let fixture: ComponentFixture<KanbanFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanFireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
