import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListingComponent } from './recipe/favourite-recipe/recipe-listing.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './recipe/all-recipes/all-recipes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RecipeListingComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipes', component: AllRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
