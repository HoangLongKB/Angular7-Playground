import { AuthGuard } from './../../../auth/auth.guard';
import { RecipeDetailComponent } from './../../recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './../../recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './../../recipe-start/recipe-start.component';
import { RecipesComponent } from './../../recipes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const recipesRoutes: Routes = [
  {
    path: '', component: RecipesComponent,
      children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
