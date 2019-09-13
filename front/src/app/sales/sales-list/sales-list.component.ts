import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  // sales: Sale[];

  constructor(private router: Router, private salesService: SalesService) { }

  ngOnInit() {
    // this.salesService.getSales().subscribe(
    //   sales => this.sales = sales;
    // );
  }

}
