import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  //params: Observable<any> = of<any>({});

  private subject = new Subject();

  push(valor: any) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        //Router para sustituir router
        { provide: Router, useClass: FakeRouter },
        //ActivatedRoute
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe redireccionar a medico cuando se gurade', () => {
    //const router = TestBed.get(Router)
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('debe colocar el id = nuevo', () => {
    component = fixture.componentInstance;

    const activateRoute = TestBed.get(ActivatedRoute);

    activateRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });
});
