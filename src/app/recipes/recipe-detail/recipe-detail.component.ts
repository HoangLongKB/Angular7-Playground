import { AuthService } from './../../auth/auth.service';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeID: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params
      .subscribe( (param: Params) => {
        this.recipeID = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.recipeID);
      });
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    if (this.authService.isAuthenticate()) {
      this.recipeService.deleteRecipe(this.recipeID);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      alert('Please Login to use this Feature!!!');
    }
  }
}
