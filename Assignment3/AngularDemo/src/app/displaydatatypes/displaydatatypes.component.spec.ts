import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydatatypesComponent } from './displaydatatypes.component';

describe('DisplaydatatypesComponent', () => {
  let component: DisplaydatatypesComponent;
  let fixture: ComponentFixture<DisplaydatatypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydatatypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydatatypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
