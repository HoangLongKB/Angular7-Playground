import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const shoppingRoutes: Routes = [
  {path: '', component: ShoppingListComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule { }
