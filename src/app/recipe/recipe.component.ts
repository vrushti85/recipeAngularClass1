import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  foodsStall = [
    {
      recipeName: 'Burger',
      chefName: 'Ranveer Brar',
      imageUrl: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'non-vegetarian',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      recipeName: 'Italian Pasta',
      chefName: 'JM',
      imageUrl: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'vegetarian',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
      recipeName: 'Chicken Maggie',
      chefName: 'Nisha Madhulika',
      imageUrl: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'non-vegetarian',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
      recipeName: 'Veg. Pulav',
      chefName: 'Tarla Dalal',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'vegetarian',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
  ];
  public addRecipeForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.addRecipeForm = this.formbuilder.group(
      {
        recipeName: ['', Validators.required],
        imageUrl: ['', Validators.required],
        description: ['', Validators.required],
        type: ['', Validators.required],
        chefName: ['', Validators.required],
      });
  }

  get resetPass() { return this.addRecipeForm.controls; }

  addrecipe() {
    this.foodsStall.push(this.addRecipeForm.value);
    this.addRecipeForm.reset();
  }
}
