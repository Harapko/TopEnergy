import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveComponent } from './effective.component';

describe('EffectiveComponent', () => {
  let component: EffectiveComponent;
  let fixture: ComponentFixture<EffectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EffectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
