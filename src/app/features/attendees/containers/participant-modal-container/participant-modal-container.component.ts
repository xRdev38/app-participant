import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogFactoryService, DialogService } from '../../../dialog/services';
import { DialogData } from '../../../dialog/models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../../../../shared';
import { switchMap, takeUntil, tap } from 'rxjs';
import { AttendeesService } from '../../services';
import { ParticipantRole } from '@core/enums';
import { AuthToken, ParticipantOptions } from '@core/models';

@Component({
  selector: 'app-participant-modal-container',
  templateUrl: './participant-modal-container.component.html',
  styleUrls: ['./participant-modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantModalContainerComponent extends BaseComponent {
  dialog!: DialogService;
  projectId!: number;
  token!: AuthToken;
  formGroupParticipant = new FormGroup({
    privilege: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    company: new FormControl(),
    address: new FormControl(),
    email: new FormControl('', [Validators.required]),
  });

  @ViewChild('formParticipantTemplate')
  formParticipantTemplate!: TemplateRef<any>;

  constructor(
    private dialogFactoryService: DialogFactoryService,
    private attendeesService: AttendeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.onInit$
      .pipe(
        takeUntil(this.onDestroy$),
        switchMap(() => this.route.params),
        tap((params: any) => {
          this.projectId = params['projectId'];
        }),
        switchMap(() => this.route.data),
        tap(data => {
          const { users } = data;
          this.token = users.authToken;
        })
      )
      .subscribe();

    this.onAfterViewInit$
      .pipe(
        takeUntil(this.onDestroy$),
        tap(() => {
          this.openDialog({
            headerText: 'Partager votre projet',
            template: this.formParticipantTemplate,
          });
        })
      )
      .subscribe();
  }

  async closeDialog() {
    this.dialog.close();
    await this.router.navigate(['/', 'attendees']);
  }

  private openDialog(dialogData: DialogData): void {
    this.dialog = this.dialogFactoryService.open(dialogData);
  }

  submitForm(): void {
    if (this.formGroupParticipant.invalid) {
      return;
    }

    this.attendeesService
      .addParticipant(
        { ...this.token },
        this.formatResponse({ ...this.formGroupParticipant.value })
      )
      .pipe(
        takeUntil(this.onDestroy$),
        tap(async () => {
          await this.closeDialog();
        })
      )
      .subscribe();
  }

  private formatResponse(formData: {
    privilege: string;
    name: string;
    company: string;
    address: string;
    email: string;
  }): ParticipantOptions {
    return {
      email: formData.email,
      name: formData.name,
      company: formData.company,
      jobTitle: '',
      projectId: this.projectId,
      role: formData.privilege as ParticipantRole,
    };
  }
}
