import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getSales(){
    return this.http.get('http://localhost:3000/peliculas/');
  }  

  /*getListadobyId(id) {
    return this.http.get('http://localhost:3000/peliculas/' + id);
  }*/

  addSales(obj) {
    return this.http.post('http://localhost:3000/peliculas/', obj);
  }

  /*modifyOffer(obj, id) {
    return this.http.put(this.url, obj, id);
  }

  deleteOffer(id) {
    return this.http.delete(this.url, id);
  }*/
}
