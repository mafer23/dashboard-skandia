import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsProductsSliderComponent } from './cards-products-slider.component';
import { CardProductsService } from '../../core/services/card-products.service';
import { of } from 'rxjs';
import { ElementRef } from '@angular/core';

const mockCards = [
  {
    nameProduct: 'Cuenta Ahorros',
    numberProduct: '12345',
    balanceProduct: 5000,
    detaildProduct: 'Saldo disponible'
  },
  {
    nameProduct: 'FIC Efectivo',
    numberProduct: '67890',
    balanceProduct: 10000,
    detaildProduct: 'Inversión activa'
  }
];

class MockCardProductsService {
  getCards() {
    return of({ listCard: mockCards });
  }
}

describe('CardsProductsSliderComponent', () => {
  let component: CardsProductsSliderComponent;
  let fixture: ComponentFixture<CardsProductsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsProductsSliderComponent], 
      providers: [
        { provide: CardProductsService, useClass: MockCardProductsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsProductsSliderComponent);
    component = fixture.componentInstance;
    const div = document.createElement('div');
    div.appendChild(document.createElement('div')); 
    component.slider = new ElementRef(div);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load cards from service', () => {
    expect(component.cards.length).toBe(2);
    expect(component.cards[0].nameProduct).toBe('Cuenta Ahorros');
  });

  it('should toggle showRecommendedProducts when toggleExplorarAhora is called', () => {
    expect(component.showRecommendedProducts).toBeFalse();
    component.toggleExplorarAhora();
    expect(component.showRecommendedProducts).toBeTrue();
    component.toggleExplorarAhora();
    expect(component.showRecommendedProducts).toBeFalse();
  });

  it('should scroll left when emitSlideLeft is called', () => {
    const spy = spyOn(component.slider.nativeElement, 'scrollBy');
    spyOn<any>(component, 'calcScrollAmount').and.returnValue(200); 
    component.emitSlideLeft();
    expect(spy).toHaveBeenCalledWith({ left: -200, behavior: 'smooth' });
  });

  it('should scroll right when emitSlideRight is called', () => {
    const spy = spyOn(component.slider.nativeElement, 'scrollBy');
    spyOn<any>(component, 'calcScrollAmount').and.returnValue(250); 
    component.emitSlideRight();
    expect(spy).toHaveBeenCalledWith({ left: 250, behavior: 'smooth' });
  });

  it('should calculate scroll amount based on child element width + gap', () => {
    const el = document.createElement('div');
    const child = document.createElement('div');
    child.style.width = '300px';
    el.appendChild(child);

    spyOn(child, 'getBoundingClientRect').and.returnValue({
      width: 300,
      height: 100,
      top: 0,
      left: 0,
      bottom: 100,
      right: 300,
      x: 0,
      y: 0,
      toJSON: () => {}
    });

    const amount = (component as any).calcScrollAmount(el);
    expect(amount).toBeGreaterThan(290); 
  });
});
