import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.scss']
})
export class RecipeListingComponent implements OnInit {
  recipes;
  favriouteList = [];
  constructor(private helperService: HelperService) {
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
