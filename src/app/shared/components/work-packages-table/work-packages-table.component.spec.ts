import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPackagesTableComponent } from './work-packages-table.component';

describe('WorkPackagesTableComponent', () => {
  let component: WorkPackagesTableComponent;
  let fixture: ComponentFixture<WorkPackagesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPackagesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPackagesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
