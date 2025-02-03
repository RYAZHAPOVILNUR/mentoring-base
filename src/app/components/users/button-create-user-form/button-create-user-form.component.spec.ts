import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateUserFormComponent } from './button-create-user-form.component';

describe('ButtonCreateUserFormComponent', () => {
  let component: ButtonCreateUserFormComponent;
  let fixture: ComponentFixture<ButtonCreateUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCreateUserFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCreateUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
