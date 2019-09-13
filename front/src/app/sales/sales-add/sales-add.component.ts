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

  sale: Sales;
  errorMessage: string;

  constructor(private saleService: SalesService, private router: Router) {
    this.sale = <Sales>{};
  }

  ngOnInit() {
  }

  onSubmit(sales: Sales) {
    sales.id;
    this.saleService.addSales(sales).subscribe(
      new_owner => {
        this.sale = new_owner;
        this.gotoOwnersList();  
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoSalesList() {
    this.router.navigate(['/sales']);
  }

  addSales() {
    this.router.navigate(['/sales/add']);
  }

}
