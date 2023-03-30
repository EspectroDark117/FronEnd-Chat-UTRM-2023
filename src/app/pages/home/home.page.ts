import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { SocketService } from '../chat/socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
  //segment = 'chats'
  open_new_chat = false;
  /*users = [
    {id: 1, name: 'Carlos', photo: 'https://i.pravatar.cc/385'},
    {id: 2, name: 'Urias', photo: 'https://i.pravatar.cc/382'},
    {id: 3, name: 'Axel', photo: 'https://i.pravatar.cc/381'},
  ];
  chatRooms = [
    {id: 1, name: 'Carlos', photo: 'https://i.pravatar.cc/385'},
    {id: 2, name: 'Urias', photo: 'https://i.pravatar.cc/382'},
    {id: 3, name: 'Axel', photo: 'https://i.pravatar.cc/381'},
  ]*/

  public user_id1:any;
  public user_id2:any;
  //users;
  plt;
  public users:any;

  constructor(public dummy:DummyService, private router: Router, private userService: UserService, private socketService: SocketService) { 
    this.plt = localStorage.getItem('platform')
    this.users = this.dummy.posts;
  }

  ngOnInit() {
    this.findUser();
  }

  async findUser() {
    const query: any = await this.userService.findUser();
    console.log(query.data)
    this.users = query.data;
  }

  async findRoom() {
    this.user_id1 = localStorage.getItem('user_id1')
    console.log(this.user_id1)

    this.user_id2 = localStorage.getItem('user_id2')
    console.log(this.user_id2)

    const query: any = await this.userService.findRoom(this.user_id1,this.user_id2);
    console.log(query.data) 
  }

  ///////////////////

  logout() {
    this.popover.dismiss();
  }

  edit_user() {
    this.popover.dismiss();
  }

  onSegmentChanged(event: any) {
    console.log(event)
  }
/*
  newChat() {
    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {

  }

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item) {

  }
*/
  getChat(user_id:number) {
    this.user_id2 = user_id;
    localStorage.setItem('user_id2', this.user_id2.toString());  
    this.findRoom()
    this.router.navigate(['/chat']);
  }
}

