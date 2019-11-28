import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListfichePage } from './listfiche.page';

describe('ListfichePage', () => {
  let component: ListfichePage;
  let fixture: ComponentFixture<ListfichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListfichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
