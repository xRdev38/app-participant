import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantTableComponent } from './participant-table.component';
import { MaterialModule } from '../../material.module';
import { BaseComponent } from '../base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Participant } from '@core/models';
import { ParticipantInvitationState, ParticipantRole } from '@core/enums';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

const participants: Participant[] = [
  {
    email: 'laurent@bigsool.com',
    name: 'Laurent Wozniak',
    company: 'Bigsool',
    jobTitle: "Maitre d'oeuvre",
    projectId: 34567,
    role: ParticipantRole.OWNER,
    state: ParticipantInvitationState.ACTIVE,
  },
];

const actions = [
  {
    icon: 'test',
    name: 'name',
    isHidden: () => false,
    action: (actor: Participant) => {
      return actor;
    },
  },
];

describe('ParticipantTableComponent', () => {
  let component: ParticipantTableComponent;
  let fixture: ComponentFixture<ParticipantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialModule],
      declarations: [
        BaseComponent,
        ContextMenuComponent,
        ParticipantTableComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantTableComponent);
    component = fixture.componentInstance;
    component.attendees = participants;
    component.actions = actions;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table', done => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(2);

      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML.trim()).toBe('Email');
      expect(headerRow.cells[1].innerHTML.trim()).toBe('Nom');
      expect(headerRow.cells[2].innerHTML.trim()).toBe('Société');
      expect(headerRow.cells[3].innerHTML.trim()).toBe('Statut');
      expect(headerRow.cells[4].innerHTML.trim()).toBe('Privilèges');

      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML.trim()).toBe(participants[0]['email']);
      expect(row1.cells[1].innerHTML.trim()).toBe(participants[0]['name']);
      expect(row1.cells[2].innerHTML.trim()).toBe(participants[0]['company']);
      expect(row1.cells[3].innerHTML.trim()).toBe('');
      expect(row1.cells[4].innerHTML.trim()).toBe(participants[0]['role']);
      done();
    });
  });
});
