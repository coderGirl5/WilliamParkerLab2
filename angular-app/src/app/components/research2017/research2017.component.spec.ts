import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Research2017Component } from './research2017.component';

describe('Research2017Component', () => {
  let component: Research2017Component;
  let fixture: ComponentFixture<Research2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Research2017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Research2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
