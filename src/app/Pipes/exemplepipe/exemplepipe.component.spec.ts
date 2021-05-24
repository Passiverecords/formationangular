import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplepipeComponent } from './exemplepipe.component';

describe('ExemplepipeComponent', () => {
  let component: ExemplepipeComponent;
  let fixture: ComponentFixture<ExemplepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
