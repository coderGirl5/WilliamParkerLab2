import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Research2020Component } from './research2020.component';

describe('Research2020Component', () => {
  let component: Research2020Component;
  let fixture: ComponentFixture<Research2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Research2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Research2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
