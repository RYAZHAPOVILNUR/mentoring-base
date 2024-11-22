import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodosFormComponent } from './create-todos-form.component';

describe('CreateTodosFormComponent', () => {
  let component: CreateTodosFormComponent;
  let fixture: ComponentFixture<CreateTodosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodosFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTodosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
