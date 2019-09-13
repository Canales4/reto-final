import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Sales } from '../sales' ;
import { SalesService } from '../sales.service'

@Component({
  selector: 'app-sales-edit',
  templateUrl: './sales-edit.component.html',
  styleUrls: ['./sales-edit.component.css']
})
export class SalesEditComponent implements OnInit {
  // @Input() mensaje;
  constructor(private salesService: SalesService, private router: Router) { }

  ngOnInit() {
  }

  gotosaleList() {
    console.log("Usuario Añadido");
    this.router.navigate(['/sales']);
  }

}
