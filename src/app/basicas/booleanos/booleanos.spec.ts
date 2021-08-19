import { usuarioIngresado } from './booleanos';



xdescribe('Pruebas de Booleanos', () => {

    it( 'Debe de retornar true', () => {

        const res = usuarioIngresado();

        expect( res ).toBeTruthy();

    });


});
