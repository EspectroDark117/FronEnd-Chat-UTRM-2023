import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  public formUpdate = new FormGroup({
    nombre: new FormControl(''),
    pass: new FormControl(''),
    correo: new FormControl(''),
    foto: new FormControl(''),
  })

  constructor(private activeRouter: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.findOneUser()
  }

  close() {
    this.router.navigate(['/home']);
  }

  goToEditProfile() {
    this.router.navigate(['/edit-user-profile']);
  }

  async findOneUser() {
    let id = this.activeRouter.snapshot.paramMap.get('id');
    console.log(id);
    const query: any = await this.userService.findOneUser(id);
    console.log(query.data);
  
    if (query && query.data) {
      this.formUpdate.setValue({
        'nombre': query.data.nombre,
        'pass': query.data.pass,
        'correo': query.data.correo,
        'foto': query.data.foto
      });
    }
  }

  async update(id: number) {
    console.log("ID", id)
    //this.router.navigate(['admin/list_about/update_about', id]);
  }

  get datos() {
    return this.formUpdate.controls;
  }

}
