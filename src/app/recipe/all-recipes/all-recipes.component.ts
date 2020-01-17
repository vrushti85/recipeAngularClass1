import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  recipes = this.helperService.recipes;
  selectedRecipe = this.recipes[0];
  isSelected = false;
  constructor(
    private helperService: HelperService,
  ) { }

  ngOnInit() {
  }

  recipeDetail(recipe) {
    this.isSelected = true;
    this.selectedRecipe = recipe;
  }

  public toggleSelected() {
    this.selectedRecipe.favrioute = !this.selectedRecipe.favrioute;
  }
}
