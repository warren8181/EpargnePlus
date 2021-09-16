/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AchatTontineComponent } from './achat-tontine.component';

describe('AchatTontineComponent', () => {
  let component: AchatTontineComponent;
  let fixture: ComponentFixture<AchatTontineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatTontineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatTontineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
