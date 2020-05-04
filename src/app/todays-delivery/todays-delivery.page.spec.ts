import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodaysDeliveryPage } from './todays-delivery.page';

describe('TodaysDeliveryPage', () => {
  let component: TodaysDeliveryPage;
  let fixture: ComponentFixture<TodaysDeliveryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysDeliveryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodaysDeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
