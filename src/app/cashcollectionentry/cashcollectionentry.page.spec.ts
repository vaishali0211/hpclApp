import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashcollectionentryPage } from './cashcollectionentry.page';

describe('CashcollectionentryPage', () => {
  let component: CashcollectionentryPage;
  let fixture: ComponentFixture<CashcollectionentryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashcollectionentryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashcollectionentryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
