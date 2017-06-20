import {EventEmitter} from "@angular/core";

import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  // emitting an event since the addIngredient method does not modify the original array
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // whenever the original array changes, we will send a copy of it
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
