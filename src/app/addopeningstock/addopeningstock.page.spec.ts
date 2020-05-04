import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddopeningstockPage } from './addopeningstock.page';

describe('AddopeningstockPage', () => {
  let component: AddopeningstockPage;
  let fixture: ComponentFixture<AddopeningstockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddopeningstockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddopeningstockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
