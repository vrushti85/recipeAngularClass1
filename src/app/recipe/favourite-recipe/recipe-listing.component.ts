import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.scss']
})
export class RecipeListingComponent implements OnInit {
  recipes;
  searchText;
  favriouteList = [];
  constructor(
    private helperService: HelperService,
    private authService: AuthService) {
    this.recipes = this.helperService.recipes;
    if (this.recipes) {
      this.recipes.forEach(element => {
        if (element.favrioute) {
          this.favriouteList.push(element);
        }
      });
    }
  }
  ngOnInit() { }

}
