import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportGlobalComponent } from './rapport-global.component';

describe('RapportGlobalComponent', () => {
  let component: RapportGlobalComponent;
  let fixture: ComponentFixture<RapportGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
