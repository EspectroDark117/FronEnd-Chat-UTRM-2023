import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,   HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string
  private socket!: Socket;

  constructor(public httpClient: HttpClient) {

    this.url = environment.apiUrl
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }
  //Users
  async signup(data: any) {
    const query = this.httpClient.post(this.url + '/login', data).toPromise();
    console.log(data)
    return query;
  }

  async createUser(user: any) {
    const query = this.httpClient.post(this.url + '/user-create', user).toPromise()
    console.log(user);
    return query;
  }

  async findUser() {
    const user = this.httpClient.get(this.url + '/find_all ').toPromise();
    console.log(user);
    return user;
  }
  async findRoom(id1=1, id2=2) {
    const user = this.httpClient.get(this.url + `/findChat/${id1}/${id2}`).toPromise();
    return user;
  }

  async findOneUser(user_id: any) {
    const user = this.httpClient.get(this.url + '/findone_user/:id').toPromise();
    console.log(user);
    return user;
  }

  joinRoom(data:any): void {
    this.socket.emit('join', data);
  }

  sendMessage(data:any): void {
    this.socket.emit('message', data);
  }

  getMessage(): Observable<any> {
    return new Observable<{user: string, message: string}>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }
  // async findOneUser() {
  //  const user = this.httpClient.get(this.url + '/findone_user/:id').toPromise();
  //  console.log(user);
  //  return user;
  //}

  getToken() {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false;
    }
  }


  checkAuth() {
    return true;
  }
}
