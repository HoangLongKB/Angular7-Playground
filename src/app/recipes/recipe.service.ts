import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();


    private   recipes: Recipe[] = [
        new Recipe('Rice Chicken', 'This is Recipe Description',
        'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg',
        [
        new Ingredient('Chicken', 1),
        new Ingredient('Tomato', 2)
        ]),
        new Recipe('Pho', 'This is Recipe Description',
        'https://img.taste.com.au/FOmGb0F6/taste/2016/11/chicken-pho-108887-1.jpeg',
        [
        new Ingredient('Noodle', 1),
        new Ingredient('Beef', 150)
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(id: number, newRecipe: Recipe) {
        this.recipes[id] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
