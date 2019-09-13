import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  // Variables
  sales;

  constructor(private salesService: SalesService, private router: Router) { }

  ngOnInit() {
    this.salesService.getSales().subscribe(data => {
      this.sales = data;
    });
  }

  modSale(obj){
    this.router.navigate(['/sales/edit/'+obj.id]);
  }

}
