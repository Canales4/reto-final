import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVigenteComponent } from './listado-vigente.component';

describe('ListadoVigenteComponent', () => {
  let component: ListadoVigenteComponent;
  let fixture: ComponentFixture<ListadoVigenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoVigenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVigenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
