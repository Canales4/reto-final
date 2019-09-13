import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAddComponent } from './sales-add/sales-add.component';
import { SalesEditComponent } from './sales-edit/sales-edit.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesRoutingModule } from './sales-routing.module';
import { PetsModule } from 'app/pets/pets.module';
import { FormsModule } from '@angular/forms';
import { SalesService } from './sales.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SalesRoutingModule,
    PetsModule
  ],
  declarations: [
    SalesAddComponent, 
    SalesEditComponent, 
    SalesListComponent, 
    SalesDetailComponent
  ],
  providers: [SalesService]
})
export class SalesModule { }
