import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class StoredServerService {

  recipesURL = 'https://recipebook-9244e.firebaseio.com/recipes.json';

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  updateData() {
    const token = this.authService.getToken();
    return this.http.put(this.recipesURL + '?auth=' + token, this.recipeService.getRecipes());
  }
  getData() {
    const token = this.authService.getToken();
    this.http.get<Recipe[]>(this.recipesURL + '?auth=' + token)
      .pipe(map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
