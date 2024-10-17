import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProgramaComponent } from './mostrar-programa.component';

describe('MostrarProgramaComponent', () => {
  let component: MostrarProgramaComponent;
  let fixture: ComponentFixture<MostrarProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarProgramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
