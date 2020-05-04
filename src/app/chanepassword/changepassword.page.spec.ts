import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChanepasswordPage } from './changepassword.page';

describe('ChanepasswordPage', () => {
  let component: ChanepasswordPage;
  let fixture: ComponentFixture<ChanepasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanepasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChanepasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
