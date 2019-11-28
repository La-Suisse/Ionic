import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FicheinfosPage } from './ficheinfos.page';

describe('FicheinfosPage', () => {
  let component: FicheinfosPage;
  let fixture: ComponentFixture<FicheinfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheinfosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FicheinfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
