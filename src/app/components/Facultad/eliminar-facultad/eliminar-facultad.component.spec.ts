import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFacultadComponent } from './eliminar-facultad.component';

describe('EliminarFacultadComponent', () => {
  let component: EliminarFacultadComponent;
  let fixture: ComponentFixture<EliminarFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarFacultadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
