import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDelComponent } from './button-del.component';

describe('ButtonDelComponent', () => {
  let component: ButtonDelComponent;
  let fixture: ComponentFixture<ButtonDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
