import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFacultadComponent } from './mostrar-facultad.component';

describe('MostrarFacultadComponent', () => {
  let component: MostrarFacultadComponent;
  let fixture: ComponentFixture<MostrarFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarFacultadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
