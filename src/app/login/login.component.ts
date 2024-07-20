import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  err: boolean = false
  errMsg: String = ""

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  handleLoginForm() {
    if (this.loginForm.valid) {
        this.err = false;
        this.errMsg = "";
        console.log("Submitting")
        // Fetch request for login
    } else {
      this.err = true;
      this.errMsg = "Invalid Form";
    }
  }
}
