import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFacultadComponent } from './actualizar-facultad.component';

describe('ActualizarFacultadComponent', () => {
  let component: ActualizarFacultadComponent;
  let fixture: ComponentFixture<ActualizarFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarFacultadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
