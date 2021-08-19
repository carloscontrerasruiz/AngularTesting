import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

//probar rutas
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA], //es para ignorar los selectores que no conozca
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //router outlet
  it('Debe tener un router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElemnet = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElemnet).not.toBeNull();
  });
});
