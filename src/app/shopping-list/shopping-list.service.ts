import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

    ingredientChanged = new Subject<Ingredient[]>();
    startedEditting = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
      ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    updateIngredient(updateIngredientIndex: number, newIngredient: Ingredient) {
        this.ingredients[updateIngredientIndex] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(deleteIngredientIndex: number) {
        this.ingredients.splice(deleteIngredientIndex, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
