import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisVolComponent } from './dis-vol.component';

describe('DisVolComponent', () => {
  let component: DisVolComponent;
  let fixture: ComponentFixture<DisVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisVolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
