import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPassagesComponent } from './history-passages.component';

describe('HistoryPassagesComponent', () => {
  let component: HistoryPassagesComponent;
  let fixture: ComponentFixture<HistoryPassagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPassagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
