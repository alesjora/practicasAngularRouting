import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFichaComponent } from './productos-ficha.component';

describe('ProductosFichaComponent', () => {
  let component: ProductosFichaComponent;
  let fixture: ComponentFixture<ProductosFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
