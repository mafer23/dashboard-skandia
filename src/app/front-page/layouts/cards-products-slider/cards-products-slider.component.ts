import { Component, OnInit, ViewChild, ElementRef, input, output, Input, Output, EventEmitter } from '@angular/core';
import { CardProductsService } from '../../core/services/card-products.service';
import { CardProduct } from '../../core/models/card-product.model';
import { CardProductsComponent } from '../card-products/card-products.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-products-slider',
  standalone: true,
  imports: [CommonModule, NgFor, CardProductsComponent],
  templateUrl: './cards-products-slider.component.html',
  styleUrl: './cards-products-slider.component.css',
})
export class CardsProductsSliderComponent implements OnInit {
  showRecommendedProducts = false;


  sectionData = {
  backgroundImage: 'assets/img/Group12973.png',
  badge: 'destacados',
  product: {
    image: 'assets/img/Mask.png',
    tag: 'Inversión inteligente',
    title: '¡Nuevo producto disponible!',
    link: '/productos/123',
    minReturn: '5% anuales',
    clientCount: '10.000 clientes'
  }
}
  
  currentIndex = 0;
  @Input() num!: number;
  @Output() slideLeft = new EventEmitter<string>();
  @Output() slideRight = new EventEmitter<string>();



  @ViewChild('slider', { static: false }) slider!: ElementRef;
  cards: CardProduct[] = [];

  constructor(private cardService: CardProductsService) { }
  
  
  ngOnInit() {
    this.cardService.getCards().subscribe(res => {
      this.cards = res.listCard;
    });
  }

    toggleExplorarAhora() {
    this.showRecommendedProducts = !this.showRecommendedProducts;
  }

  emitSlideLeft() {
    if (this.slider) {
      this.slider.nativeElement.scrollBy({
        left: -this.calcScrollAmount(this.slider.nativeElement),
        behavior: 'smooth',
      });
    }
  }

  emitSlideRight() {
    if (this.slider) {
      this.slider.nativeElement.scrollBy({
        left: this.calcScrollAmount(this.slider.nativeElement),
        behavior: 'smooth',
      });
    }
  }

  private calcScrollAmount(el: HTMLElement): number {
    const first = el.children[0] as HTMLElement | undefined;
    if (first) {
      const rect = first.getBoundingClientRect();
      let gap = 10;
      try {
        const cs = getComputedStyle(el);
        gap = parseFloat(cs.gap as string) || gap;
      } catch { }
      return Math.round(rect.width + gap);
    }
    return Math.round(el.clientWidth * 0.8);
  }

// Puedes cambiar los datos fácilmente:

}
