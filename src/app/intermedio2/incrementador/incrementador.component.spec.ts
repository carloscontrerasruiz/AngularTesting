import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges()
    });

    it('Debe mostrar leyenda', () => {
        component.leyenda = 'Progreso de carga'
        fixture.detectChanges()
        const elem: HTMLElement = fixture.debugElement
        .query( By.css('h3') ).nativeElement

        expect(elem.innerHTML).toContain('Progreso de carga')

    });

    it('Cambiar valor',async ()=>{

        component.cambiarValor(5)
        fixture.detectChanges()

        await fixture.whenStable()

        const input = fixture.debugElement.query(
            By.css('input')
        ).nativeElement

        expect(input.value).toBe('55')
    })

    it('Deb incrementar o decrementar ',()=>{
        const botones = fixture.debugElement.queryAll(
            By.css('.btn-primary')
        )

        botones[0].triggerEventHandler('click',null)

        expect(component.progreso).toBe(45)

        botones[1].triggerEventHandler('click',null)

        expect(component.progreso).toBe(50)

    })

    it('Progresp titulo del componente',()=>{
        const botones = fixture.debugElement.queryAll(
            By.css('.btn-primary')
        )

        botones[0].triggerEventHandler('click',null)

        expect(component.progreso).toBe(45)

        fixture.detectChanges()
        
        const elem: HTMLElement = fixture.debugElement
        .query( By.css('h3') ).nativeElement

        expect(elem.innerHTML).toContain('45')

    })

});
