import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  // only an array of Recipe objects will be stored in recipes
  // made private so that you cannot directly access this array from outside
  private recipes: Recipe[] = [
    new Recipe('Pelau',
      'A test recipe',
      'https://s-media-cache-ak0.pinimg.com/originals/1e/94/b8/1e94b87644df699f0d24c1b20e71e7f7.jpg',
      [
        new Ingredient('Meat', 4),
        new Ingredient('Rice', 8)
      ]),
    new Recipe('Doubles',
      'A Next Test Recipe',
      'https://s-media-cache-ak0.pinimg.com/originals/1e/94/b8/1e94b87644df699f0d24c1b20e71e7f7.jpg',
      [
        new Ingredient('Channa', 10),
        new Ingredient('Bara', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // so that we get a copy of the array instead of editing this one
    return this.recipes.slice();
  }

  getRecipe(index) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
