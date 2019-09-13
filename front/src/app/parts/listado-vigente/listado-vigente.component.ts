import { Component, OnInit } from '@angular/core';
import { ListadovigenteService } from './listadovigente.service';

@Component({
  selector: 'app-listado-vigente',
  templateUrl: './listado-vigente.component.html',
  styleUrls: ['./listado-vigente.component.css']
})
export class ListadoVigenteComponent implements OnInit {

  listado;

  constructor(private listadovigente: ListadovigenteService) { }

  ngOnInit() {
    this.listadovigente.getListado().subscribe(data => {
      this.listado = data;
      console.log(this.listado);
    })
  }

}
