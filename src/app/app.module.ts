import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListingComponent } from './recipe-listing/recipe-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
