/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LynxItemComponent } from './lynx-item.component';

describe('LynxItemComponent', () => {
  let component: LynxItemComponent;
  let fixture: ComponentFixture<LynxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LynxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LynxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
