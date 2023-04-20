import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.page.html',
  styleUrls: ['./edit-user-profile.page.scss'],
})
export class EditUserProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.router.navigate(['/edit-user']);
  }

}
