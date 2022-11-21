import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistviewComponent } from './courselistview.component';

describe('CourselistviewComponent', () => {
  let component: CourselistviewComponent;
  let fixture: ComponentFixture<CourselistviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourselistviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
