import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPestComponent } from './list-pest.component';

describe('ListPestComponent', () => {
  let component: ListPestComponent;
  let fixture: ComponentFixture<ListPestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
