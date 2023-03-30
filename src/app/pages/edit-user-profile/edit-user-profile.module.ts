import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUserProfilePageRoutingModule } from './edit-user-profile-routing.module';

import { EditUserProfilePage } from './edit-user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUserProfilePageRoutingModule
  ],
  declarations: [EditUserProfilePage]
})
export class EditUserProfilePageModule {}
