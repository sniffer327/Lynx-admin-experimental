/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LynxTableComponent } from './lynx-table.component';

describe('LynxTableComponent', () => {
  let component: LynxTableComponent;
  let fixture: ComponentFixture<LynxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LynxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LynxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
