/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {SalesDetailComponent} from './sales-detail/sales-detail.component';
import {SalesListComponent} from './sales-list/sales-list.component';
// import {SalesEditComponent} from './sales-edit/sales-edit.component';
import {SalesAddComponent} from './sales-add/sales-add.component';
// import {PetAddComponent} from '../pets/pet-add/pet-add.component';

const ownerRoutes: Routes = [
  {path: 'sales', component: SalesListComponent},
  {path: 'sales/add', component: SalesAddComponent},
  // {path: 'sales/:id', component: SalesDetailComponent},
  // {path: 'sales/:id/edit', component: SalesEditComponent},
  // {path: 'sales/:id/pets/add', component: PetAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ownerRoutes)],
  exports: [RouterModule]
})

export class SalesRoutingModule {
}
