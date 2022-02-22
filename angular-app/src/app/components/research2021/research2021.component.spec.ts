import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Research2021Component } from './research2021.component';

describe('Research2021Component', () => {
  let component: Research2021Component;
  let fixture: ComponentFixture<Research2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Research2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Research2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
