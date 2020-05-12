import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormeraComponent } from './normera.component';

describe('NormeraComponent', () => {
  let component: NormeraComponent;
  let fixture: ComponentFixture<NormeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
