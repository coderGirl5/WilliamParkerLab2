import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Research2018Component } from './research2018.component';

describe('Research2018Component', () => {
  let component: Research2018Component;
  let fixture: ComponentFixture<Research2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Research2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Research2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
