import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProvinciaComponent } from './tarjeta-provincia.component';

describe('TarjetaProvinciaComponent', () => {
  let component: TarjetaProvinciaComponent;
  let fixture: ComponentFixture<TarjetaProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
