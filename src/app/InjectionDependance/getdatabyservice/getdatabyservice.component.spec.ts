import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdatabyserviceComponent } from './getdatabyservice.component';

describe('GetdatabyserviceComponent', () => {
  let component: GetdatabyserviceComponent;
  let fixture: ComponentFixture<GetdatabyserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdatabyserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdatabyserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
