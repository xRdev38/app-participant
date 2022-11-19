import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../shared';
import { FormControl, FormGroup } from '@angular/forms';
import { LabelByParticipantRole, ParticipantRole } from '@core/enums';

@Component({
  selector: 'app-form-participant',
  templateUrl: './form-participant.component.html',
  styleUrls: ['./form-participant.component.scss'],
})
export class FormParticipantComponent extends BaseComponent {
  @Input() form!: FormGroup;

  readonly ParticipantRole = ParticipantRole;
  readonly LabelByParticipantRole = LabelByParticipantRole;
  participants = Object.values(ParticipantRole);

  get privilegeFormControl(): FormControl {
    return this.form.get('privilege') as FormControl;
  }

  get nameFormControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get companyFormControl(): FormControl {
    return this.form.get('company') as FormControl;
  }

  get addressFormControl(): FormControl {
    return this.form.get('address') as FormControl;
  }

  get emailFormControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  constructor() {
    super();
  }

  trackByParticipant(index: number, participant: string): string {
    return `${index}-${participant}`;
  }
}
