import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPackagesTableComponent } from './work-packages-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';

describe('WorkPackagesTableComponent', () => {
  let component: WorkPackagesTableComponent;
  let fixture: ComponentFixture<WorkPackagesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialModule],
      declarations: [WorkPackagesTableComponent],
    }).compileComponents();
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
