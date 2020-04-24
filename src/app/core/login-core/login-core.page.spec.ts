import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginCorePage } from './login-core.page';

describe('LoginCorePage', () => {
  let component: LoginCorePage;
  let fixture: ComponentFixture<LoginCorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginCorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
