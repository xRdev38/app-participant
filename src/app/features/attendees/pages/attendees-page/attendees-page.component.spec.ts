import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeesPageComponent } from './attendees-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  AttendeesContainerComponent,
  SharedAttendeesContainerComponent,
} from '../../containers';

describe('AttendeesPageComponent', () => {
  let component: AttendeesPageComponent;
  let fixture: ComponentFixture<AttendeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AttendeesPageComponent,
        AttendeesContainerComponent,
        SharedAttendeesContainerComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
