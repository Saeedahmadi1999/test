import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User.AcountComponent } from './user.acount.component';

describe('User.AcountComponent', () => {
  let component: User.AcountComponent;
  let fixture: ComponentFixture<User.AcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User.AcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User.AcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
