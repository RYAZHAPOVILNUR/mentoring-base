import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodoConfirmationComponent } from './delete-todo-confirmation.component';

describe('DeleteTodoConfirmationComponent', () => {
  let component: DeleteTodoConfirmationComponent;
  let fixture: ComponentFixture<DeleteTodoConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTodoConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTodoConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
