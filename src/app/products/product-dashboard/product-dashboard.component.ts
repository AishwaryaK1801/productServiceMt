import { Component, OnInit } from '@angular/core';
import { Iproduct, productStatus } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  prodArr!:Array<Iproduct>
  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    this.prodArr=this._productService.fetchAllProducts()
  }

  
}
