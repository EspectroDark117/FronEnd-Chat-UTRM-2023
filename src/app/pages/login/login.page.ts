import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formLogin: FormGroup;
  isTypePassword: boolean = true;
  isLogin = false;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder,) { 
    //this.initForm();
    this.formLogin = this.formBuilder.group({
      correo: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }
/*
  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', 
        {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('', 
        {validators: [Validators.required, Validators.minLength(8)]}
      ),
    });
  }
*/
  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  async login() {
    const query: any = await this.userService.signup(this.formLogin.value);
    console.log(query)
    if (query.ok) {
      localStorage.setItem('token', query.token)
      this.router.navigateByUrl('/home')
      const user_id1 = query.data.user_id;
      //localStorage.setItem('user_id', query.data.user_id)
      localStorage.setItem('user_id1', user_id1.toString());
      console.log("Esta es la info del usuario", user_id1)
    }
  }

}

