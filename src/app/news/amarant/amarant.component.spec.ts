import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarantComponent } from './amarant.component';

describe('AmarantComponent', () => {
  let component: AmarantComponent;
  let fixture: ComponentFixture<AmarantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmarantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
