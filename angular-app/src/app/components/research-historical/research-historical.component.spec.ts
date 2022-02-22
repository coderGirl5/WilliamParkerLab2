import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchHistoricalComponent } from './research-historical.component';

describe('ResearchHistoricalComponent', () => {
  let component: ResearchHistoricalComponent;
  let fixture: ComponentFixture<ResearchHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
