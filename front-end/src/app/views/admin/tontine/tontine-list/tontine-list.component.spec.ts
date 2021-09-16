/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TontineListComponent } from './tontine-list.component';

describe('TontineListComponent', () => {
  let component: TontineListComponent;
  let fixture: ComponentFixture<TontineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TontineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
