import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiluronComponent } from './giluron.component';

describe('GiluronComponent', () => {
  let component: GiluronComponent;
  let fixture: ComponentFixture<GiluronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiluronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiluronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
