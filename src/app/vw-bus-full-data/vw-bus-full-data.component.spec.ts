import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VwBusFullDataComponent } from './vw-bus-full-data.component';

describe('VwBusFullDataComponent', () => {
  let component: VwBusFullDataComponent;
  let fixture: ComponentFixture<VwBusFullDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VwBusFullDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VwBusFullDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
