import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  // only an array of Recipe objects will be stored in recipes
  // made private so that you cannot directly access this array from outside
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simpy a test',
      'https://s-media-cache-ak0.pinimg.com/originals/1e/94/b8/1e94b87644df699f0d24c1b20e71e7f7.jpg'),
    new Recipe('A Next Test Recipe', 'Simpy a test',
      'https://s-media-cache-ak0.pinimg.com/originals/1e/94/b8/1e94b87644df699f0d24c1b20e71e7f7.jpg')
  ];

  getRecipes() {
    // so that we get a copy of the array instead of editing this one
    return this.recipes.slice();
  }




}
