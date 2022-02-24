import { Component, OnInit } from '@angular/core'
import { Product } from '../product.module'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  products!: Product[]

  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productServices: ProductService) {}

  ngOnInit(): void {
    this.productServices.read().subscribe((products) => {
      this.products = products
    })
  }
}
