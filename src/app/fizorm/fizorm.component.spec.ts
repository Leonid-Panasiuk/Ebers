import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizormComponent } from './fizorm.component';

describe('FizormComponent', () => {
  let component: FizormComponent;
  let fixture: ComponentFixture<FizormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
