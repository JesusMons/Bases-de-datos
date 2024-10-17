import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarGrupoComponent } from './eliminar-grupo.component';

describe('EliminarGrupoComponent', () => {
  let component: EliminarGrupoComponent;
  let fixture: ComponentFixture<EliminarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarGrupoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
