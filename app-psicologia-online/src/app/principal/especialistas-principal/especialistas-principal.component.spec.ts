import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistasPrincipalComponent } from './especialistas-principal.component';

describe('EspecialistasPrincipalComponent', () => {
  let component: EspecialistasPrincipalComponent;
  let fixture: ComponentFixture<EspecialistasPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialistasPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
