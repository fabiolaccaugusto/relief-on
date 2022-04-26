import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsEditComponent } from './specialists-edit.component';

describe('SpecialistsEditComponent', () => {
  let component: SpecialistsEditComponent;
  let fixture: ComponentFixture<SpecialistsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
