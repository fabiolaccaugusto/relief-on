import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPrincipalComponent } from './cursos-principal.component';

describe('CursosPrincipalComponent', () => {
  let component: CursosPrincipalComponent;
  let fixture: ComponentFixture<CursosPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
