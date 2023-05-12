import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  toppingList: string[] = ['Fruits', 'Vegetables', 'Electronic'];
  FreshnessList = ['Brand New', 'Second Hand', 'Refurbshed'];
  productForm ! : FormGroup;
  constructor(
    private formBilder :  FormBuilder
    ) {

  }
  ngOnInit() {
    this.productForm = this.formBilder.group({
      productName : ['', Validators.required],
      category : ['', Validators.required],
      price : ['', Validators.required],
      comment : ['', Validators.required],
      data : ['', Validators.required],
    })
  }
}
