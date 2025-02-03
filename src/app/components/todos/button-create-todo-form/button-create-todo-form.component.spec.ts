import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateTodoFormComponent } from './button-create-todo-form.component';

describe('ButtonCreateTodoFormComponent', () => {
  let component: ButtonCreateTodoFormComponent;
  let fixture: ComponentFixture<ButtonCreateTodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCreateTodoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCreateTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
