import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleInfoComponent } from './visible-info.component';

describe('VisibleInfoComponent', () => {
  let component: VisibleInfoComponent;
  let fixture: ComponentFixture<VisibleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibleInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
