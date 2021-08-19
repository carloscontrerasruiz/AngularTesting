import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Formularios', () => {
  let componet: FormularioRegister;

  beforeEach(() => {
    componet = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear formulario con 2 campos', () => {
    expect(componet.form.contains('email')).toBeTruthy();
    expect(componet.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {
    const control = componet.form.get('email');
    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });

  it('El email debe ser valido', () => {
    const control = componet.form.get('email');
    control?.setValue('novalido');

    expect(control?.valid).toBeFalsy();
  });

  it('El email debe ser valido', () => {
    const control = componet.form.get('email');
    control?.setValue('nemail@email.com');

    expect(control?.valid).toBeTruthy();
  });
});
