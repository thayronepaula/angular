import { Component, OnInit } from '@angular/core'
import { ProductService } from '../product.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  myName = 'Thayrone'

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.showMessage('operação executada com sucesso')
  }

  createProduct(): void {
    this.productService.showMessage('operação executada com sucesso')
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
