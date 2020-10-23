import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginError: any;

  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  sigIn() {
    const user = this.form.value;
    this.loginService.sigIn(user).subscribe(
      (response: any) => {
        const admin = response.user.roleId === 1;
        response.user.access_token = response.access_token; 
        sessionStorage.setItem('user', JSON.stringify(response.user));
        if (admin) {
          this.router.navigate(['pending-queries']);
        } else {
          this.router.navigate(['my-queries']);
        }
      },
      err => {
        this.loginError = true;
      });
  }
}
