import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosLandingPageComponent } from './cursos-landing-page.component';

describe('CursosLandingPageComponent', () => {
  let component: CursosLandingPageComponent;
  let fixture: ComponentFixture<CursosLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
