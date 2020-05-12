import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexinComponent } from './regexin.component';

describe('RegexinComponent', () => {
  let component: RegexinComponent;
  let fixture: ComponentFixture<RegexinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
