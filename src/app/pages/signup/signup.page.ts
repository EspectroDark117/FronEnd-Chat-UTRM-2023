import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public formW: FormGroup;
  isTypePassword: boolean = true;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { 
    this.formW = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido_p: ['', Validators.required],
      apellido_m: ['', Validators.required],
      pass: ['', Validators.required],
      correo: ['', Validators.required],
      foto: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }



  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  async createUser() {
    const query: any = await this.userService.createUser(this.formW.value);
    console.log(query)
    this.router.navigateByUrl('/login')
  }


}
