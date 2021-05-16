import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddorderPage } from './addorder.page';

describe('AddorderPage', () => {
  let component: AddorderPage;
  let fixture: ComponentFixture<AddorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
