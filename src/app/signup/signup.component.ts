import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  err: boolean = false
  errMsg: String = ""

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  });

  handleSignupForm() {
    if (this.signupForm.valid) {
      if (this.signupForm.value.password === this.signupForm.value.confirmPassword) {
        this.err = false;
        this.errMsg = "";
        this.submitForm()
      }
      else {
        this.err = true;
        this.errMsg = "Passwords do not match";
      }
    } else {
      this.err = true;
      this.errMsg = "Form in Invalid";
    }
  }

  async submitForm() {
    const response = await fetch('http://localhost:5000/note/sign_up', {
      method: 'POST',
      body: JSON.stringify({
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }),
      headers: { 'Content-Type': 'application/json' }
    })

    const data = await response.json()
    if(data[' error']){
      this.err = true;
      this.errMsg = data['error'];
    }
    else{
      localStorage.setItem('authToken', data['token'])
      location.href = "/"
    }
  }
}