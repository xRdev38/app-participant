import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParticipantComponent } from './form-participant.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../../../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const form = new FormGroup({
  privilege: new FormControl('', [Validators.required]),
  name: new FormControl('', [Validators.required]),
  company: new FormControl(),
  address: new FormControl(),
  email: new FormControl('', [Validators.required]),
});

describe('FormParticipantComponent', () => {
  let component: FormParticipantComponent;
  let fixture: ComponentFixture<FormParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MaterialModule],
      declarations: [FormParticipantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParticipantComponent);
    component = fixture.componentInstance;
    component.form = form;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
