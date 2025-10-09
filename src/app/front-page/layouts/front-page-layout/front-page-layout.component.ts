import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CardsProductsSliderComponent } from '../cards-products-slider/cards-products-slider.component';
import { CardProductsComponent } from '../card-products/card-products.component';

@Component({
  selector: 'app-front-page-layout',
  imports: [CommonModule,RouterOutlet, NavbarComponent, CardProductsComponent ,CardsProductsSliderComponent, FooterComponent],
  templateUrl: './front-page-layout.component.html',
  
})
export class FrontPageLayoutComponent { }
