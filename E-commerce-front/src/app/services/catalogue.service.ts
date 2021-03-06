import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  
  public host: string = "http://localhost:8080";

  // Injection de dépendance
  constructor(private http: HttpClient) { }

  public getResource(url: string) {
    return this.http.get(this.host + url);
  }

  public uploadPhoto(file: File, idProduct: any): Observable<HttpEvent<{}>> {
    let formatData: FormData = new FormData();
    formatData.append('file', file);

    const req = new HttpRequest('POST', this.host + '/uploadPhoto/' + idProduct, formatData, {
      reportProgress: true,
      responseType: 'text', // json par default
    });

    return this.http.request(req);
  }

  public getProduct(url: string) :Observable<Product>{
    return this.http.get<Product>( url);

  }

  public patchResource(url: string,data: any){
    return this.http.patch(url,data);
  }


}
