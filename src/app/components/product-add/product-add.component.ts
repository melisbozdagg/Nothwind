import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm :FormGroup;
  constructor(private formsBuilder:FormBuilder, private productService:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm(){
    this.productAddForm=this.formsBuilder.group({
      productName:["",Validators.required],
      unitPrice:["", Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["", Validators.required]
    })
  }
  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value);
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Ürün Eklendi.");
        console.log(response);
      },reponseError=>{
       if(reponseError.error.Errors.length>0){
         console.log(reponseError.error.Errors);
         for (let i = 0; i <reponseError.error.Errors.length; i++) {
          this.toastrService.error(reponseError.error.Errors[i].ErrorMessage,"Doğrulama hatası!!");
         }
       }
      }) 
    }
  else{
    this.toastrService.error("Formu Eksik Doldurdunuz.");
  }
}
}