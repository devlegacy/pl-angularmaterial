import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FexboxComponent } from './fexbox.component';

describe('FexboxComponent', () => {
  let component: FexboxComponent;
  let fixture: ComponentFixture<FexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FexboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
