import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Product } from '../_models';
import { ProductService } from '../_services';

@Component({ templateUrl: 'product-list.component.html' })
export class ProductListComponent {
    loading = false;
    products: Product[];

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.reloadProducts();
    }

    reloadProducts() {
        this.loading = true;
        this.productService.getAll().pipe(first()).subscribe(products => {
            this.loading = false;
            this.products = products;
        });
    }

    deleteProduct(id: number) {
        this.productService.deleteProduct(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadProducts();
            },
            error => console.log(error));
      }
    
      viewProduct(id: number){
        this.router.navigate(['details', id]);
      }
    
      updateProduct(id: number){
        this.router.navigate(['update', id]);
      }
}