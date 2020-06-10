import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloeComponent } from './aloe.component';

describe('AloeComponent', () => {
  let component: AloeComponent;
  let fixture: ComponentFixture<AloeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
