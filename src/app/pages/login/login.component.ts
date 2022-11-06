import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = false;

  public register: RegisterForm = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private route: Router
  ) {}

  ngOnInit(): void {}

  showData() {
    return (this.hide = true);
  }
  hideData() {
    return (this.hide = false);
  }
}
