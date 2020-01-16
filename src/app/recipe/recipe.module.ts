import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListingComponent } from './favourite-recipe/recipe-listing.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';

@NgModule({
  declarations: [
    RecipeListingComponent,
    AddRecipeComponent,
    AllRecipesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RecipeListingComponent,
  ],
})
export class RecipeModule { }
