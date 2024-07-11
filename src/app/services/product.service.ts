import { Injectable } from '@angular/core';
import { Iproduct, productStatus } from '../models/product.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

productsArr:Array<Iproduct>=[
  {
    pname : 'laptop',
    pdetails : '512GB 8GB RAM',
    pstatus : productStatus.Delivered,
    id:'111'
  },
  {
    pname : 'Mobile',
    pdetails : '128GB ',
    pstatus : productStatus.Canceled,
    id:'112'
  },
  {
    pname : 'tv',
    pdetails : '42 Inch TV',
    pstatus : productStatus.Dispached,
    id:'113'
  },
  {
    pname : 'washing machine',
    pdetails : '9kg washing machine',
    pstatus : productStatus.InProgress,
    id:'114'
  }

]
  constructor(
    private _snackbarService : SnackbarService
  ) { }

  fetchAllProducts(){
    return this.productsArr
  }

  addProduct(productObj : Iproduct){
    this.productsArr.push(productObj);
    this._snackbarService.openSnackBar(`Product ${productObj.pname} Is Added Successfully !!!`)
  }

  updateProductStatus(prodObj:Iproduct){
    let getIndex = this.productsArr.findIndex(prod=>prod.id===prodObj.id);
    let oldObj = this.productsArr[getIndex];
    this.productsArr[getIndex]=prodObj;
    this._snackbarService.openSnackBar(`Product Status of ${prodObj.pname} is changed to ${prodObj.pstatus}`)
  }
}
