import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Research2015Component } from './research2015.component';

describe('Research2015Component', () => {
  let component: Research2015Component;
  let fixture: ComponentFixture<Research2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Research2015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Research2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
