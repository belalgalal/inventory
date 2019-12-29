import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }

    deleteProduct(id: number) {
        return this.http.delete(`${environment.apiUrl}/products/${id}`, { responseType: 'text' });
    }

    getProduct(id: number) {
        return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
    } 

    addProduct(product: Product) {
        return this.http.post<Product>(`${environment.apiUrl}/products`, product);
    }

    updateProduct(id: number, product: Product) {
        return this.http.put(`${environment.apiUrl}/products/${id}`, product);
    }
}