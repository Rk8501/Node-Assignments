import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayselectionComponent } from './displayselection.component';

describe('DisplayselectionComponent', () => {
  let component: DisplayselectionComponent;
  let fixture: ComponentFixture<DisplayselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
