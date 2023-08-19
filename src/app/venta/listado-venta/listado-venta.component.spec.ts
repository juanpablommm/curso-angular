import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVentaComponent } from './listado-venta.component';

describe('ListadoVentaComponent', () => {
  let component: ListadoVentaComponent;
  let fixture: ComponentFixture<ListadoVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoVentaComponent]
    });
    fixture = TestBed.createComponent(ListadoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
