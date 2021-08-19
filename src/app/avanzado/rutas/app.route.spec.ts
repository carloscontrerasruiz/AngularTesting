import { MedicoComponent } from "src/app/intermedio2/medico/medico.component"
import { routes } from "./app.route"

describe('Rutas principales', ()=>{

    it('Debe existir la ruta ',()=>{
        expect(routes).toContain(
            { path: 'medico/:id', component: MedicoComponent}
        )
    })
})