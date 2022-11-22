import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CieloAbiertoComponent } from './cielo-abierto.component';

describe('CieloAbiertoComponent', () => {
  let component: CieloAbiertoComponent;
  let fixture: ComponentFixture<CieloAbiertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CieloAbiertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CieloAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
