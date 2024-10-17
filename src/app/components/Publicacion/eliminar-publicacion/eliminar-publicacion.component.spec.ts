import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPublicacionComponent } from './eliminar-publicacion.component';

describe('EliminarPublicacionComponent', () => {
  let component: EliminarPublicacionComponent;
  let fixture: ComponentFixture<EliminarPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPublicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
