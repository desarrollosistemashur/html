import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAparteComponent } from './pagina-aparte.component';

describe('PaginaAparteComponent', () => {
  let component: PaginaAparteComponent;
  let fixture: ComponentFixture<PaginaAparteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAparteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
