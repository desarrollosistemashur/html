import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProvinciasComponent } from './tarjeta-provincias.component';

describe('TarjetaProvinciasComponent', () => {
  let component: TarjetaProvinciasComponent;
  let fixture: ComponentFixture<TarjetaProvinciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProvinciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
