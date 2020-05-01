import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentTableComponent } from './percent-table.component';

describe('PercentTableComponent', () => {
  let component: PercentTableComponent;
  let fixture: ComponentFixture<PercentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
