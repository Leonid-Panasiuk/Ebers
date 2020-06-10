import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NettleComponent } from './nettle.component';

describe('NettleComponent', () => {
  let component: NettleComponent;
  let fixture: ComponentFixture<NettleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NettleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
