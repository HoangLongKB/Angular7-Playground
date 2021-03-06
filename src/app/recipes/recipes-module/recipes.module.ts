import { SharedModule } from './../../shared/shared-module/shared-module.module';
import { RecipesRoutingModule } from './recipes-routing/recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeEditComponent } from './../recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './../recipe-start/recipe-start.component';
import { RecipeItemComponent } from './../recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './../recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './../recipe-list/recipe-list.component';
import { RecipesComponent } from './../recipes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ]
})
export class RecipesModule { }
