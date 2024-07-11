import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { productStatus } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('prodForm') prodForm !: NgForm
  constructor(
    private _productService : ProductService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
  }

  onProductAdd(){
    if(this.prodForm.valid){
      let newProd={...this.prodForm.value,id:this._uuidService.uuid(),pstatus:productStatus.InProgress};
      console.log(newProd);
      this._productService.addProduct(newProd);
      this.prodForm.reset()
    }
  }

}
