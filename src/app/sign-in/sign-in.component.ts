import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signinForm: FormGroup;

  constructor( private formbuilder: FormBuilder, private router: Router, private authService: AuthService ) {}

  ngOnInit() {
    this.signInForm();
  }

  ionViewWillEnter() {
    this.signInForm();
  }

  signInForm() {
    this.signinForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get signin() { return this.signinForm.controls; }

  async submit() {
    console.log('clicked');
    if (this.signinForm.valid) {
      console.log('valid');
      this.signinForm.get('username').setValue(this.signinForm.get('username').value.toLowerCase());
      const requestBody = { ...this.signinForm.value };
      localStorage.setItem('LoggedUser', JSON.stringify(requestBody.username));
      localStorage.setItem('token', 'true');
      this.router.navigate(['add-recipe']);
    }
  }
}
