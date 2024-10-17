import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicacionComponent } from './mostrar-publicacion.component';

describe('MostrarPublicacionComponent', () => {
  let component: MostrarPublicacionComponent;
  let fixture: ComponentFixture<MostrarPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPublicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
