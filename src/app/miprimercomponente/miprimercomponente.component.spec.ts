import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiprimercomponenteComponent } from './miprimercomponente.component';

describe('MiprimercomponenteComponent', () => {
  let component: MiprimercomponenteComponent;
  let fixture: ComponentFixture<MiprimercomponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiprimercomponenteComponent]
    });
    fixture = TestBed.createComponent(MiprimercomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
