import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListComponent } from './todos-list.component.component';

describe('TodosListComponentComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
