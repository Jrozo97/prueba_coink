import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = false;

  constructor() {}

  ngOnInit(): void {}

  showData() {
    return (this.hide = true);
  }
  hideData() {
    return (this.hide = false);
  }
}
