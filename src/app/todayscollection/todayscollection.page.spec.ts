import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayscollectionPage } from './todayscollection.page';

describe('TodayscollectionPage', () => {
  let component: TodayscollectionPage;
  let fixture: ComponentFixture<TodayscollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayscollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayscollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
