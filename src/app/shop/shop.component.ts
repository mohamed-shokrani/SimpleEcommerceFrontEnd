import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../Models/IProduct';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products?: IProduct[];

  constructor(private productService: ShopService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      console.log(products);
      this.products = products;
    });
  }
}
