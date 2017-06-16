import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // only an array of Recipe objects will be stored in recipes
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simpy a test', 'https://s-media-cache-ak0.pinimg.com/originals/1e/94/b8/1e94b87644df699f0d24c1b20e71e7f7.jpg'),
    new Recipe('A Next Test Recipe', 'Simpy a test', 'https://s-media-cache-ak0.pinimg.com/originals/1e/94/b8/1e94b87644df699f0d24c1b20e71e7f7.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
