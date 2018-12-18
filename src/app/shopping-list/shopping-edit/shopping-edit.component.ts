import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  startedEdittingSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.startedEdittingSubscription = this.shoppingListService.startedEditting.subscribe(
      (index) => {
        this.editItemIndex = +index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(this.editItemIndex);
        this.slForm.setValue(
          {
            name: this.editItem.name,
            amount: this.editItem.amount
          }
        );
      });
  }
  onChangeIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.clearForm();
  }

  ngOnDestroy(): void {
    this.startedEdittingSubscription.unsubscribe();
  }
}
