import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksByYearComponent } from './works-by-year.component';

describe('WorksByYearComponent', () => {
  let component: WorksByYearComponent;
  let fixture: ComponentFixture<WorksByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
