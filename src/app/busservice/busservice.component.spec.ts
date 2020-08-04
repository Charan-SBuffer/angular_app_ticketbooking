import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusserviceComponent } from './busservice.component';

describe('BusserviceComponent', () => {
  let component: BusserviceComponent;
  let fixture: ComponentFixture<BusserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
