import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTitleComponent } from './view-title.component';

const title = 'Mon titre';
const subtitle = 'mon sous-titre';

describe('ViewTitleComponent', () => {
  let component: ViewTitleComponent;
  let fixture: ComponentFixture<ViewTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTitleComponent);
    component = fixture.componentInstance;
    component.viewTitle = title;
    component.subtitle = subtitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be have view title', done => {
    component.viewTitle = title;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let titleSpan = fixture.nativeElement.querySelector('.title-header');
      expect(titleSpan.innerHTML.trim()).toContain(title);
      done();
    });
  });

  it('should be have subtitle', done => {
    component.subtitle = subtitle;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let subtitleSpan =
        fixture.nativeElement.querySelector('.subtitle-header');
      expect(subtitleSpan.innerHTML.trim()).toContain(subtitle);
      done();
    });
  });
});
