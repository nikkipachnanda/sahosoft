import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistivewComponent } from './courselistivew.component';

describe('CourselistivewComponent', () => {
  let component: CourselistivewComponent;
  let fixture: ComponentFixture<CourselistivewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourselistivewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
