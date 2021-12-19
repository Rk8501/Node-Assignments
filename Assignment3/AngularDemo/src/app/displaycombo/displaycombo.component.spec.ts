import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycomboComponent } from './displaycombo.component';

describe('DisplaycomboComponent', () => {
  let component: DisplaycomboComponent;
  let fixture: ComponentFixture<DisplaycomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycomboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
