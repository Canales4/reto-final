import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent implements OnInit {
  
  // sale: Sale;
  errorMessage: string;
  
  constructor(private saleService: SalesService) { 
    // this.sale = <Sale>{};

  }


  ngOnInit() {
  }

  // onSubmit(sale: Sale) {
  //   sale.id = null;
  //   this.ownerService.addOwner(sale).subscribe(
  //     new_owner => {
  //       this.sale = new_owner;
  //       this.gotoOwnersList();
  //     },
  //     error => this.errorMessage = <any>error
  //   );
  // }

}
