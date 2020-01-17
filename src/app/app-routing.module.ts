import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListingComponent } from './recipe/favourite-recipe/recipe-listing.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './recipe/all-recipes/all-recipes.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: RecipeListingComponent },
  { path: 'add-recipe', component: AddRecipeComponent, canActivate: [AuthGuard], },
  { path: 'recipes', component: AllRecipesComponent, canActivate: [AuthGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
