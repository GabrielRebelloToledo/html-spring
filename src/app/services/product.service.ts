import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAllProducts(){
    return this.http.get("/")
  }
  getCategory(){
    return this.http.get("/")
  }

  saveProduct(obj:any){
    return this.http.post("/", obj)
  }
  updateProduct(obj:any){
    return this.http.post("/", obj)
  }
  deleteProduct(obj:any){
    return this.http.delete("/", obj)
  }


}
