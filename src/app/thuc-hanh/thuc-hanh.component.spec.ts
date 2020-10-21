import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThucHanhComponent } from './thuc-hanh.component';

describe('ThucHanhComponent', () => {
  let component: ThucHanhComponent;
  let fixture: ComponentFixture<ThucHanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThucHanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThucHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
