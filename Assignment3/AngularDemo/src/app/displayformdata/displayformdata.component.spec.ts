import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayformdataComponent } from './displayformdata.component';

describe('DisplayformdataComponent', () => {
  let component: DisplayformdataComponent;
  let fixture: ComponentFixture<DisplayformdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayformdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayformdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
