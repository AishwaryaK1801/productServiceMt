import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, productStatus } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {
  productStatusEnum = productStatus
  @Input() getProduct !: Iproduct
  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
  }

  onProdStatusUpdate(status : productStatus){
    this.getProduct.pstatus=status;
    this._productService.updateProductStatus(this.getProduct)
  }
}
