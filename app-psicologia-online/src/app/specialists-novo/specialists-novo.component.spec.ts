import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsNovoComponent } from './specialists-novo.component';

describe('SpecialistsNovoComponent', () => {
  let component: SpecialistsNovoComponent;
  let fixture: ComponentFixture<SpecialistsNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistsNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistsNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
