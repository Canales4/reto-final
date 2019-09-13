import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadovigenteService {
  
  url: string;

  constructor(private http: HttpClient) { }

  getListado() {
    return this.http.get('http://localhost:3000/peliculas/');
  }

  /*addOffer(obj) {
    return this.http.post(this.url, obj);
  }

  modifyOffer(obj, id) {
    return this.http.put(this.url, obj, id);
  }

  deleteOffer(id) {
    return this.http.delete(this.url, id);
  }*/
}
