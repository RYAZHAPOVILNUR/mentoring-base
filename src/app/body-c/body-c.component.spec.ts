import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCComponent } from './body-c.component';

describe('BodyCComponent', () => {
  let component: BodyCComponent;
  let fixture: ComponentFixture<BodyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
