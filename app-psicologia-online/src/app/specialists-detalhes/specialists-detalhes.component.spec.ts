import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsDetalhesComponent } from './specialists-detalhes.component';

describe('SpecialistsDetalhesComponent', () => {
  let component: SpecialistsDetalhesComponent;
  let fixture: ComponentFixture<SpecialistsDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistsDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistsDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
