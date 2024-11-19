import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListCardComponent } from './user-list-card.component';

describe('UserListCardComponent', () => {
  let component: UserListCardComponent;
  let fixture: ComponentFixture<UserListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
