import { Component, Input } from '@angular/core';
import { CardProduct } from '../../core/models/card-product.model';
import { CommonModule, CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-card-products',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './card-products.component.html',
  styleUrl: './card-products.component.css',
})
export class CardProductsComponent {
  @Input() card!: CardProduct;
    @Input() index!: number; 

  icons: string[] = [
    "assets/icon/Happy.svg",
    "assets/icon/Trofeo.svg",
    "assets/icon/Handheart.svg"
  ];

  get icon() {
    return this.icons[this.index % this.icons.length];
  }
}
