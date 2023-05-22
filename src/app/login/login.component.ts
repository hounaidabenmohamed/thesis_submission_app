import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  ngOnInit() { }

  checkTerms(): void {
    let termsCheck = document.getElementById('agree-terms') as HTMLInputElement;
    let btn = document.getElementById('signup_submit') as HTMLButtonElement;
    if (termsCheck.checked == true) {
      btn.classList.remove("disabled");
      btn.disabled = false;
    } else {
      btn.classList.add("disabled");
      btn.disabled = true;
    }
  }

  changeToLogin(): void {
    let signUp = document.getElementById("sign-up") as HTMLElement;
    let logIn = document.getElementById("log-in") as HTMLElement;
    signUp.classList.add("hidden");
    logIn.classList.remove("hidden");
  }

  changeToSignup(): void {
    let signUp = document.getElementById("sign-up") as HTMLElement;
    let logIn = document.getElementById("log-in") as HTMLElement;
    signUp.classList.remove("hidden");
    logIn.classList.add("hidden");
  }

}