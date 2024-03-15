import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  categoryList: any[] = [];

  productsList: any[] = [];

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();

  }

  getAllProduct() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.productsList = res.data;
    })
  }
  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }
  onSave() {
    this.productService.saveProduct(this.prductObj).subscribe((res: any) => {
      if (res.result) {
        alert("Product Created");
        this.getAllProduct();
      }
      else {
        alert(res.message)
      }
    })
  }
  onUpdate() {
    this.productService.updateProduct(this.prductObj).subscribe((res: any) => {
      if (res.result) {
        alert("Product Updated");
        this.getAllProduct();
      }
      else {
        alert(res.message)
      }
    })
  }
  onEdit(item: any) {
    this.prductObj = item;
    this.isSidePanelVisible = true;
  }
  onDelete(item: any) {
    const isDelete = confirm('Are you sure want to delete ?');
    if (isDelete){
      this.productService.deleteProduct(item.productId).subscribe((res: any) => {
        if (res.result) {
          alert("Product Deleted");
          this.getAllProduct();
        }
        else {
          alert(res.message)
        }
      })
    }
  }

  isSidePanelVisible: boolean = false;


  prductObj: any = {
    "productId": 0,
    "product": "",
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""

  }

  openSidepanel() {
    this.isSidePanelVisible = true;
  }
  closeSidepanel() {
    this.isSidePanelVisible = false;
  }



}
