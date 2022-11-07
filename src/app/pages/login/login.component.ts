import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

interface loginForm {
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

  formRegister: FormGroup;
  formLogin: FormGroup;


  register: any = {
    name: '',
    email: '',
    password: '',
  };
  login: any = {
    email: '',
    password: '',
  };

  constructor(private route: Router, private fb: FormBuilder, private toast: HotToastService) {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });

    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    })

  }

  ngOnInit(): void {}

  showData() {
    return (this.hide = true);
  }
  hideData() {
    return (this.hide = false);
  }

  registerUser() {
    console.log(this.formRegister);
    const registerForm: any = {
      name: this.formRegister.get('name')?.value,
      email: this.formRegister.get('email')?.value,
      password: this.formRegister.get('password')?.value,
    };
    this.register.push(registerForm);
    this.formRegister.reset();
  }

  loginUser() {
    console.log(this.formLogin);
    const loginForm: any = {
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value,
    };
    this.login.push(loginForm);
    
    this.formLogin.reset();
  }

  inputErrorMessage(){
    console.log(this.formLogin.status);
    if(this.formLogin.valid){
      console.log(this.formLogin.value)
    }else{
      this.toast.error('El email y/o contraseña no son correctas')
    }
  }
}
