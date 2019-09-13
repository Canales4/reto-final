import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import { Router } from '@angular/router';
import { Sales } from '../sales' ;

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent implements OnInit {

  sale;
  errorMessage: string;

  constructor(private salesService: SalesService, private router: Router) {
    this.sale = <Sales>{};
  }

  ngOnInit() {
  }

  onSubmit(sales: Sales) {
    sales.id  = null;
    this.salesService.addSale(sales).subscribe(
      new_sale => {
        this.sale = new_sale;   
        this.gotoSalesList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoSalesList() {
    console.log("Usuario Añadido");
    this.router.navigate(['/sales']);
  }
}
