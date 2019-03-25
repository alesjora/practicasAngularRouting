import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMadridComponent } from './mapa-madrid.component';

describe('MapaMadridComponent', () => {
  let component: MapaMadridComponent;
  let fixture: ComponentFixture<MapaMadridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaMadridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
