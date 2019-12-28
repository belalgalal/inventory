import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../_models';
import { ProductService } from '../_services';
import { ProductListComponent } from '../product-list/product-list.component';
import { debug } from 'util';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log('returned data',data)
        this.product = data;
        console.log('this.product', this.product)
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['products']);
  }

}
