import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartipantTableComponent } from './participant-table.component';

describe('PartipantTableComponent', () => {
  let component: PartipantTableComponent;
  let fixture: ComponentFixture<PartipantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartipantTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartipantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
