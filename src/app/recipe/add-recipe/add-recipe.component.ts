import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  public addRecipeForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private helperService: HelperService,
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
    this.helperService.recipes.push(this.addRecipeForm.value);
    this.addRecipeForm.reset();
  }
}
